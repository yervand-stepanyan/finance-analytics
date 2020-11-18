import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FIELD_LIST, LOADER } from '../../globals/constants';
import FieldNavigation from '../../components/FieldNavigation';
import FinanceBlock from '../../components/FinanceBlock';
import Loader from '../../components/Loader';
import ROUTES from '../../routes';
import { useStyles } from './Finance.style';

function Finance({ accessToken, currentUser }) {
  const tabs = [
    { title: 'Accounts', checked: true },
    { title: 'Customers', checked: false },
    { title: 'Payments', checked: false },
    { title: 'Invoices', checked: false },
  ];
  const classes = useStyles();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [fieldNavigationList, setFieldNavigationList] = useState(FIELD_LIST);
  const [tabList, setTabList] = useState(tabs);

  useEffect(() => {
    if (currentUser.quickBooks) {
      history.push(`${url}/${ROUTES.financeDashboard}`);
    } else {
      history.push(`${url}/${ROUTES.financeSignin}`);
    }
  }, []);

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
        <Route exact path={`${path}/:nestedRoute`}>
          <FinanceBlock
            accessToken={accessToken}
            handleTabKeyPress={handleTabKeyPress}
            handleTabSelect={handleTabSelect}
            tabList={tabList}
          />
        </Route>
      </Switch>
    </div>
  );
}

Finance.propTypes = {
  accessToken: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Finance;
