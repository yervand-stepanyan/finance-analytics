import React, { useState } from 'react';

import { Typography } from '@material-ui/core';

import { FIELD_LIST } from '../../globals/constants';
import { useStyles } from './Dashboard.style';

function Dashboard() {
  const tabs = [
    { title: 'Accounts', checked: true },
    { title: 'Customers', checked: false },
    { title: 'Payments', checked: false },
    { title: 'Invoices', checked: false },
  ];
  const classes = useStyles();
  const [fieldNavList, setFieldNavList] = useState(FIELD_LIST);
  const [tabList, setTabList] = useState(tabs);

  const handleFieldSelect = title => {
    const newFieldNavList = fieldNavList.map(field =>
      field.title === title
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

  const handleFieldItemKeyPress = event => {
    if (event.key === 'Enter') {
      handleFieldSelect();
    }
  };

  const handleTabSelect = title => {
    const newTabList = tabList.map(tab =>
      tab.title === title
        ? {
            ...tab,
            checked: true,
          }
        : {
            ...tab,
            checked: false,
          }
    );

    setTabList(newTabList);
  };

  const handleTabKeyPress = event => {
    if (event.key === 'Enter') {
      handleTabSelect();
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
      <div className={classes.contentWrapper}>
        <div className={classes.tabAndCardsWrapper}>
          <div className={classes.tabBarContainer}>
            <div className={classes.tabBarWrapper}>
              {tabList.map(tab => (
                <div
                  className={`${classes.tabWrapper} ${
                    tab.checked ? classes.checkedTab : ''
                  }`}
                  key={tab.title}
                  onClick={() => handleTabSelect(tab.title)}
                  onKeyPress={e => handleTabKeyPress(e)}
                  role="button"
                  tabIndex={0}
                >
                  <Typography variant="subtitle1">{tab.title}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
