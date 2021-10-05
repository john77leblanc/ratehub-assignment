import React from 'react';
import { StyledComponent } from './styledComponent';

const ActionLog = ({ actions }) => {
  return (
    <StyledComponent>
      <ul>
        {actions.map(action => (
          <li key={action}>{action}</li>
        ))}
      </ul>
    </StyledComponent>
  );
};

export default ActionLog;
