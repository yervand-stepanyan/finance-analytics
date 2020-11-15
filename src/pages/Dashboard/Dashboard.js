import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import { FIELD_LIST } from '../../globals/constants';
import { useStyles } from './Dashboard.style';

function Dashboard({ currentUser }) {
  const classes = useStyles();
  const { username } = currentUser;
  const [fieldNavList, setFieldNavList] = useState(FIELD_LIST);

  const handleFieldSelect = name => {
    const newFieldNavList = fieldNavList.map(field =>
      field.name === name
        ? {
            ...field,
            checked: true,
          }
        : {
            ...field,
            checked: false,
          }
    );

    setFieldNavList(newFieldNavList);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleFieldSelect();
    }
  };

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.fieldNavWrapper}>
        <div className={classes.outerItemWrapper}>
          <div className={classes.mainItemWrapper}>
            {fieldNavList.map(item => (
              <div
                className={`${classes.itemWrapper} ${
                  item.checked ? classes.checkedItemWrapper : ''
                }`}
                key={item.name}
                onClick={() => handleFieldSelect(item.name)}
                onKeyPress={e => handleKeyPress(e)}
                role="button"
                tabIndex={0}
              >
                <div className={`${item.checked ? classes.checkedItem : ''}`} />
                <div className={classes.itemNameWrapper}>
                  <Typography variant="subtitle1">{item.name}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>{`User: ${username}`}</div>
    </div>
  );
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Dashboard;
