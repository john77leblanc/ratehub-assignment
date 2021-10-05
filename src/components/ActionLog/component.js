import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledComponent } from './styledComponent';


const ActionLog = ({ actions }) => (
  <StyledComponent>
    <ul>
      {!!actions.length && actions.map((action) => (
        <li key={action.id}>{action.name}</li>
      ))}
    </ul>
  </StyledComponent>
);

ActionLog.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ActionLog;
