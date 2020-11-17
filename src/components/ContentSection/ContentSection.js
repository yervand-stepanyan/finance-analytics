import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ContentSection.style';
import TabBar from '../TabBar';

function ContentSection({ handleTabKeyPress, handleTabSelect, tabList }) {
  const classes = useStyles();

  return (
    <div className={classes.contentSectionContainer}>
      <div className={classes.tabAndCardsWrapper}>
        <TabBar
          handleTabKeyPress={handleTabKeyPress}
          handleTabSelect={handleTabSelect}
          tabList={tabList}
        />
      </div>
    </div>
  );
}

ContentSection.propTypes = {
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default ContentSection;
