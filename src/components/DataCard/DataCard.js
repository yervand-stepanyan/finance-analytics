import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { ACCOUNT_OPTION } from '../../globals/constants';
import { normalizeObject } from '../../helpers/normalizeObject';
import { useStyles } from './DataCard.style';

function DataCard({ dataObject }) {
  const classes = useStyles();

  const keyNames = Object.keys(normalizeObject(dataObject));
  const valueData = Object.values(normalizeObject(dataObject));

  return (
    <Card className={classes.dataCardContainer}>
      <CardContent>
        <div className={classes.contentWrapper}>
          <div>
            {keyNames.map(keyName => (
              <div key={keyName}>
                <Typography color="textSecondary" variant="subtitle1">
                  {ACCOUNT_OPTION[keyName]}
                </Typography>
              </div>
            ))}
          </div>
          <div className={classes.valueContentWrapper}>
            {valueData.map((value, index) => (
              <div key={keyNames[index]}>
                <Typography variant="subtitle1">{value}</Typography>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

DataCard.propTypes = {
  dataObject: PropTypes.object.isRequired,
};

export default DataCard;
