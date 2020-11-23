import React, { useState } from 'react';
import PropTypes from 'prop-types';

import API from '../../fetchAPI';
import CardsBlock from '../CardsBlock';
import FinanceSettings from '../FinanceSettings';
import TabBar from '../TabBar';
import { useStyles } from './FinanceDashboard.style';

function FinanceDashboard({
  accessToken,
  dataToShow,
  handleCurrentUser,
  handleDataToShow,
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

      handleDataToShow([]);
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
        <CardsBlock dataToShow={dataToShow} />
      </div>
    </div>
  );
}

FinanceDashboard.propTypes = {
  accessToken: PropTypes.string.isRequired,
  dataToShow: PropTypes.array.isRequired,
  handleCurrentUser: PropTypes.func.isRequired,
  handleDataToShow: PropTypes.func.isRequired,
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default FinanceDashboard;
