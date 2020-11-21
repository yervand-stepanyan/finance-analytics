import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardsBlock from '../CardsBlock';
import FinanceSettings from '../FinanceSettings';
import TabBar from '../TabBar';
import { useStyles } from './FinanceDashboard.style';
import API from '../../fetchAPI';

function FinanceDashboard({
  accessToken,
  handleCurrentUser,
  handleTabKeyPress,
  handleTabSelect,
  tabList,
}) {
  const classes = useStyles();
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);

  const handleShowSignOutPopup = () => {
    setShowSignOutPopup(!showSignOutPopup);
  };

  const handleQuickbooksSignOut = async () => {
    try {
      const user = await API.removeQuickbooks(accessToken);

      setShowSignOutPopup(false);

      handleCurrentUser({ user });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.financeDashboardContainer}>
      <FinanceSettings
        handleQuickbooksSignOut={handleQuickbooksSignOut}
        handleShowSignOutPopup={handleShowSignOutPopup}
        showSignOutPopup={showSignOutPopup}
      />
      <div className={classes.tabBarAndCardsBlockWrapper}>
        <TabBar
          handleTabKeyPress={handleTabKeyPress}
          handleTabSelect={handleTabSelect}
          tabList={tabList}
        />
        <CardsBlock />
      </div>
    </div>
  );
}

FinanceDashboard.propTypes = {
  accessToken: PropTypes.string.isRequired,
  handleCurrentUser: PropTypes.func.isRequired,
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default FinanceDashboard;
