import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledComponent } from './styledComponent';


const ActionLog = ({ actions }) => (
  <StyledComponent>
    <ul>
      {!!actions.length && actions.map((action) => (
        <li key={action}>{action}</li>
      ))}
    </ul>
  </StyledComponent>
);

ActionLog.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ActionLog;
