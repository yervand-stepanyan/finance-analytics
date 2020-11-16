import React, { useState } from 'react';

import DashboardBlock from '../../components/DashboardBlock';
import QuickbooksSignIn from '../../components/QuickbooksSignIn';

function Dashboard() {
  const [isQuickbooksSignedIn, setIsQuickbooksSignedIn] = useState(false);

  const handleQuickbooksSignIn = () => {
    setIsQuickbooksSignedIn(true);
  };

  return isQuickbooksSignedIn ? (
    <DashboardBlock />
  ) : (
    <QuickbooksSignIn handleQuickbooksSignIn={handleQuickbooksSignIn} />
  );
}

export default Dashboard;
