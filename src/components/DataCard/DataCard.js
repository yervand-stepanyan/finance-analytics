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
  const normalizedObject = normalizeObject(dataObject);
  const keys = Object.keys(normalizedObject);
  const values = Object.values(normalizedObject);
  const rows = keys.map((key, index) => ({
    key,
    value: values[index],
  }));

  return (
    <Card className={classes.dataCardContainer}>
      <CardContent>
        <div>
          {rows.map(({ key, value }) => (
            <div className={classes.rowDataWrapper} key={key}>
              <div>
                <Typography color="textSecondary" variant="subtitle1">
                  {ACCOUNT_OPTION[key]}
                </Typography>
              </div>
              <div className={classes.valueDataWrapper}>
                <Typography variant="subtitle1">{value}</Typography>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

DataCard.propTypes = {
  dataObject: PropTypes.object.isRequired,
};

export default DataCard;
