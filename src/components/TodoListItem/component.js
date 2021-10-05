import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { observer } from 'mobx-react';

import { StyledComponent } from './styledComponent';

import Tags from '../Tags/index';
import { useStore } from '../TodoList/store';


const TodoListItem = ({
  taskId,
  name,
  tags,
  inProgress,
}) => {
  const [taskName, setTaskName] = useState(name);
  const store = useStore();

  const updateStore = (value) => {
    store.setItemName(taskId, value);
  };

  return (
    <StyledComponent>
      <input
        className="name"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        onBlur={(e) => updateStore(e.target.value)}
      />
      <div className="inProgress">
        {inProgress && (<span className="inProgress">In Progress</span>)}
      </div>
      <Tags className="tags" taskId={taskId} tags={tags} />
      <div className="controls">
        <button className="toggle" type="button" onClick={() => store.toggleInProgress(taskId)}>
          {inProgress ? 'Pause' : 'Start'}
        </button>
        <button
          className="complete"
          type="button"
          onClick={() => store.setCompleted(taskId)}
          disabled={!inProgress}
        >
          Complete
        </button>
        <button
          className="delete"
          type="button"
          onClick={() => store.setDelete(taskId)}
        >
          Delete
        </button>
      </div>
    </StyledComponent>
  );
};

TodoListItem.propTypes = {
  taskId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default observer(TodoListItem);
