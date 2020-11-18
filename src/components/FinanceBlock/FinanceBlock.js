import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import FinanceDashboard from '../FinanceDashboard';
import QuickbooksSignIn from '../QuickbooksSignIn';
import ROUTES from '../../routes';

function FinanceBlock({
  accessToken,
  handleTabKeyPress,
  handleTabSelect,
  tabList,
}) {
  const { nestedRoute } = useParams();

  switch (nestedRoute) {
    case ROUTES.financeDashboard:
      return (
        <FinanceDashboard
          handleTabKeyPress={handleTabKeyPress}
          handleTabSelect={handleTabSelect}
          tabList={tabList}
        />
      );
    case ROUTES.financeSignin:
      return <QuickbooksSignIn accessToken={accessToken} />;
    default:
      return null;
  }
}

FinanceBlock.propTypes = {
  accessToken: PropTypes.string.isRequired,
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default FinanceBlock;
