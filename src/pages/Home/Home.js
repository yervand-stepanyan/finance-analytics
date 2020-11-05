import React from 'react';

import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();

  return <div className={classes.homeContainer}>Home</div>;
}

export default Home;
