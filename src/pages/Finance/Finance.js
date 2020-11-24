import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FIELD_LIST,
  GET_DATA_TYPE,
  LOADER,
  LOCAL_STORAGE,
  TAB_LIST,
} from '../../globals/constants';
import FieldNavigation from '../../components/FieldNavigation';
import FinanceBlock from '../../components/FinanceBlock';
import FinanceCallback from '../../components/FinanceCallback';
import Loader from '../../components/Loader';
import { loadState, saveState } from '../../helpers/localStorage';
import ROUTES from '../../routes';
import { useStyles } from './Finance.style';

function Finance({ accessToken, currentUser, handleCurrentUser }) {
  const classes = useStyles();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [dataToShow, setDataToShow] = useState([]);
  const [fieldNavigationList, setFieldNavigationList] = useState(FIELD_LIST);
  const [isLoading, setIsLoading] = useState(true);
  const tabFromLocalStorage = loadState(LOCAL_STORAGE.selectedTab);
  const tabListToDisplay = tabFromLocalStorage
    ? TAB_LIST.map(tab =>
        tab.title === tabFromLocalStorage
          ? {
              ...tab,
              checked: true,
            }
          : {
              ...tab,
              checked: false,
            }
      )
    : TAB_LIST;
  const [tabList, setTabList] = useState(tabListToDisplay);

  const handleDataToShow = array => {
    if (Array.isArray(array) && array.length) {
      setDataToShow(array);
    } else {
      setDataToShow([]);
    }
  };

  const getData = async type => {
    try {
      setIsLoading(true);

      const response = await GET_DATA_TYPE[type](accessToken);

      handleDataToShow(response);
    } catch (e) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser.quickBooks) {
      const selectedTab = tabList.find(tab => tab.checked);
      const { title } = selectedTab;

      getData(title);

      saveState(LOCAL_STORAGE.selectedTab, title);

      history.push(`${url}/${ROUTES.financeDashboard}`);
    } else {
      history.push(`${url}/${ROUTES.financeSignin}`);
    }

    return () => {
      localStorage.removeItem(LOCAL_STORAGE.selectedTab);
    };
  }, [currentUser]);

  const handleFieldSelect = title => {
    const newFieldNavList = fieldNavigationList.map(field =>
      field.title === title
        ? {
            ...field,
            checked: true,
          }
        : {
            ...field,
            checked: false,
          }
    );

    setFieldNavigationList(newFieldNavList);
  };

  const handleFieldItemKeyPress = event => {
    if (event.key === 'Enter') {
      handleFieldSelect();
    }
  };

  const handleTabSelect = title => {
    const selectedTabTitle = tabList.find(tab => tab.checked).title;

    if (title === selectedTabTitle) {
      return;
    }

    const newTabList = tabList.map(tab =>
      tab.title === title
        ? {
            ...tab,
            checked: true,
          }
        : {
            ...tab,
            checked: false,
          }
    );

    setTabList(newTabList);

    saveState(LOCAL_STORAGE.selectedTab, title);

    getData(title);
  };

  const handleTabKeyPress = event => {
    if (event.key === 'Enter') {
      handleTabSelect();
    }
  };

  return (
    <div className={classes.financeContainer}>
      <FieldNavigation
        fieldNavigationList={fieldNavigationList}
        handleFieldItemKeyPress={handleFieldItemKeyPress}
        handleFieldSelect={handleFieldSelect}
      />
      <Switch>
        <Route exact path={path}>
          <Loader type={LOADER.finance.title} />
        </Route>
        <Route exact path={`${path}/:route`}>
          <FinanceBlock
            accessToken={accessToken}
            dataToShow={dataToShow}
            handleCurrentUser={handleCurrentUser}
            handleDataToShow={handleDataToShow}
            handleTabKeyPress={handleTabKeyPress}
            handleTabSelect={handleTabSelect}
            isLoading={isLoading}
            tabList={tabList}
          />
        </Route>
        <Route
          exact
          path={`${path}/${ROUTES.financeSignin}/${ROUTES.financeCallback}`}
        >
          <FinanceCallback />
        </Route>
      </Switch>
    </div>
  );
}

Finance.propTypes = {
  accessToken: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  handleCurrentUser: PropTypes.func.isRequired,
};

export default Finance;
