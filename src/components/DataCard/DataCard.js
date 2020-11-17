import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './DataCard.style';

function DataCard({ salary, user }) {
  const classes = useStyles();

  return (
    <Card className={classes.dataCardContainer}>
      <CardContent>
        <div>
          <Typography variant="subtitle1">{user}</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">{salary}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

DataCard.propTypes = {
  salary: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default DataCard;
