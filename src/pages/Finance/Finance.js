import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FIELD_LIST,
  GET_DATA_TYPE,
  LOADER,
  TAB_LIST,
} from '../../globals/constants';
import FieldNavigation from '../../components/FieldNavigation';
import FinanceBlock from '../../components/FinanceBlock';
import Loader from '../../components/Loader';
import ROUTES from '../../routes';
import { useStyles } from './Finance.style';
import FinanceCallback from '../../components/FinanceCallback';

function Finance({ accessToken, currentUser, handleCurrentUser }) {
  const classes = useStyles();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [dataToShow, setDataToShow] = useState([]);
  const [fieldNavigationList, setFieldNavigationList] = useState(FIELD_LIST);
  const [isLoading, setIsLoading] = useState(true);
  const [tabList, setTabList] = useState(TAB_LIST);

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
      getData(tabList[0].title);

      history.push(`${url}/${ROUTES.financeDashboard}`);
    } else {
      history.push(`${url}/${ROUTES.financeSignin}`);
    }
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
