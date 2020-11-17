import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import { useStyles } from './FieldNavigation.style';

function FieldNavigation({
  fieldNavigationList,
  handleFieldItemKeyPress,
  handleFieldSelect,
}) {
  const classes = useStyles();

  return (
    <div className={classes.fieldNavigationContainer}>
      <div className={classes.outerItemWrapper}>
        <div className={classes.mainItemWrapper}>
          {fieldNavigationList.map(item => (
            <div
              className={`${classes.itemWrapper} ${
                item.checked ? classes.checkedItemWrapper : ''
              }`}
              key={item.title}
              onClick={() => handleFieldSelect(item.title)}
              onKeyPress={e => handleFieldItemKeyPress(e)}
              role="button"
              tabIndex={0}
            >
              <div className={`${item.checked ? classes.checkedItem : ''}`} />
              <div className={classes.itemNameWrapper}>
                <Typography variant="subtitle1">{item.title}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

FieldNavigation.propTypes = {
  fieldNavigationList: PropTypes.array.isRequired,
  handleFieldItemKeyPress: PropTypes.func.isRequired,
  handleFieldSelect: PropTypes.func.isRequired,
};

export default FieldNavigation;
