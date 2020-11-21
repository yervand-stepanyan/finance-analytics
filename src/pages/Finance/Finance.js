import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import API from '../../fetchAPI';
import { FIELD_LIST, LOADER, TAB_LIST } from '../../globals/constants';
import FieldNavigation from '../../components/FieldNavigation';
import FinanceBlock from '../../components/FinanceBlock';
import Loader from '../../components/Loader';
import { normalizeArray } from '../../helpers/normalizeArray';
import ROUTES from '../../routes';
import { sortArray } from '../../helpers/sortArray';
import { useStyles } from './Finance.style';
import FinanceCallback from '../../components/FinanceCallback';

function Finance({ accessToken, currentUser, handleCurrentUser }) {
  const classes = useStyles();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [fieldNavigationList, setFieldNavigationList] = useState(FIELD_LIST);
  const [tabList, setTabList] = useState(TAB_LIST);
  const [setAccounts] = useState([]);

  const getData = async () => {
    try {
      const response = await API.getAccounts(accessToken);
      const sortedAccounts = await normalizeArray(sortArray(response));

      await setAccounts(sortedAccounts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (currentUser.quickBooks) {
      getData();

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
            handleCurrentUser={handleCurrentUser}
            handleTabKeyPress={handleTabKeyPress}
            handleTabSelect={handleTabSelect}
            tabList={tabList}
          />
        </Route>
        <Route exact path={`${path}/:route/callback`}>
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
