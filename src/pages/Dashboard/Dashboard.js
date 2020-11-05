import React from 'react';

import { useStyles } from './Dashboard.style';

function Dashboard() {
  const classes = useStyles();

  return <div className={classes.dashboardContainer}>Dashboard: user</div>;
}

export default Dashboard;
