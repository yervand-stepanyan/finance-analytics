import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import { useStyles } from './ContentSection.style';

function ContentSection({ handleTabKeyPress, handleTabSelect, tabList }) {
  const classes = useStyles();

  return (
    <div className={classes.contentSectionContainer}>
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
  );
}

ContentSection.propTypes = {
  handleTabKeyPress: PropTypes.func.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  tabList: PropTypes.array.isRequired,
};

export default ContentSection;
