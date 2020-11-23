import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import FinanceDashboard from '../FinanceDashboard';
import QuickbooksSignIn from '../QuickbooksSignIn';
import ROUTES from '../../routes';

function FinanceBlock({
  accessToken,
  dataToShow,
  handleCurrentUser,
  handleDataToShow,
  handleTabKeyPress,
  handleTabSelect,
  tabList,
}) {
  const { route } = useParams();

  switch (route) {
    case ROUTES.financeDashboard:
      return (
        <FinanceDashboard
          accessToken={accessToken}
          dataToShow={dataToShow}
          handleCurrentUser={handleCurrentUser}
          handleDataToShow={handleDataToShow}
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
  dataToShow: PropTypes.array.isRequired,
  handleCurrentUser: PropTypes.func.isRequired,
  handleDataToShow: PropTypes.func.isRequired,
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default FinanceBlock;
