import React from 'react';
import PropTypes from 'prop-types';

import CardsBlock from '../CardsBlock';
import TabBar from '../TabBar';
import { useStyles } from './ContentSection.style';

function ContentSection({ handleTabKeyPress, handleTabSelect, tabList }) {
  const classes = useStyles();

  return (
    <div className={classes.contentSectionContainer}>
      <div className={classes.tabBarAndCardsBlockWrapper}>
        <TabBar
          handleTabKeyPress={handleTabKeyPress}
          handleTabSelect={handleTabSelect}
          tabList={tabList}
        />
        <CardsBlock />
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
