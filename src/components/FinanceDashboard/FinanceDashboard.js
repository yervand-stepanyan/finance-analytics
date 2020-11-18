import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardsBlock from '../CardsBlock';
import FinanceSettings from '../FinanceSettings';
import TabBar from '../TabBar';
import { useStyles } from './FinanceDashboard.style';

function FinanceDashboard({ handleTabKeyPress, handleTabSelect, tabList }) {
  const classes = useStyles();
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);

  const handleShowSignOutPopup = () => {
    setShowSignOutPopup(!showSignOutPopup);
  };

  return (
    <div className={classes.financeDashboardContainer}>
      <FinanceSettings
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
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default FinanceDashboard;
