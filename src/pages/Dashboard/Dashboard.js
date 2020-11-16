import React, { useState } from 'react';

import { Typography } from '@material-ui/core';

import { FIELD_LIST } from '../../globals/constants';
import { useStyles } from './Dashboard.style';

function Dashboard() {
  const tabs = ['Accounts', 'Customers', 'Payments', 'Invoices'];
  const classes = useStyles();
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
      <div className={classes.contentWrapper}>
        <div className={classes.tabBarWrapper}>
          {tabs.map(tab => (
            <div key={tab}>{tab}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
