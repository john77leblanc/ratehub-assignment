import React, { useState } from 'react'
import { observer } from 'mobx-react'

import { StyledComponent } from './styledComponent';

import Tags from '../Tags/index';
import { useStore } from '../TodoList/store';


const TodoListItem = ({
  taskId,
  className,
  name,
  tags,
  inProgress,
}) => {
  const [taskName, setTaskName] = useState(name);
  const store = useStore();

  const updateStore = (name) => {
    store.setItemName(taskId, name);
  };

  return (
    <StyledComponent className={className}>
      <input
        onChange={(e) => setTaskName(e.target.value)} value={taskName}
        onBlur={(e) => updateStore(e.target.value)}
      />
      <div className="tags w25">
        <Tags taskId={taskId} tags={tags} />
      </div>
      <div className="controls w25">
        <button onClick={() => store.toggleInProgress(taskId)}>In Progress {inProgress && (<span>True</span>)}</button>
        <button onClick={() => store.setCompleted(taskId)} disabled={!inProgress}>Complete Task</button>
        <button onClick={() => store.setDelete(taskId)}>Delete Task</button>
      </div>
    </StyledComponent>
  )
}

export default observer(TodoListItem);
