import React, { useState } from 'react';

import { FIELD_LIST } from '../../globals/constants';
import { useStyles } from './DashboardBlock.style';
import FieldNavigation from '../FieldNavigation';
import ContentSection from '../ContentSection';

function DashboardBlock() {
  const tabs = [
    { title: 'Accounts', checked: true },
    { title: 'Customers', checked: false },
    { title: 'Payments', checked: false },
    { title: 'Invoices', checked: false },
  ];
  const classes = useStyles();
  const [fieldNavigationList, setFieldNavigationList] = useState(FIELD_LIST);
  const [tabList, setTabList] = useState(tabs);

  const handleFieldSelect = title => {
    const newFieldNavList = fieldNavigationList.map(field =>
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

    setFieldNavigationList(newFieldNavList);
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
    <div className={classes.dashboardBlockContainer}>
      <FieldNavigation
        fieldNavigationList={fieldNavigationList}
        handleFieldItemKeyPress={handleFieldItemKeyPress}
        handleFieldSelect={handleFieldSelect}
      />
      <ContentSection
        handleTabKeyPress={handleTabKeyPress}
        handleTabSelect={handleTabSelect}
        tabList={tabList}
      />
    </div>
  );
}

export default DashboardBlock;
