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
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        onBlur={(e) => updateStore(e.target.value)}
      />
      <div className="tags w25">
        <Tags taskId={taskId} tags={tags} />
      </div>
      <div className="controls w25">
        <button type="button" onClick={() => store.toggleInProgress(taskId)}>
          In Progress
          {inProgress && (<span>True</span>)}
        </button>
        <button type="button" onClick={() => store.setCompleted(taskId)} disabled={!inProgress}>Complete Task</button>
        <button type="button" onClick={() => store.setDelete(taskId)}>Delete Task</button>
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
