import React from 'react'
import { observer } from 'mobx-react'

import { StyledComponent } from './styledComponent';


const TodoListItem = ({
  className,
  name,
  onComplete,
  onDelete,
  onChange,
}) => {
  return (
    <StyledComponent className={className}>
      <input onChange={onChange} value={name} />
      <div className="controls">
        <button onClick={onComplete}>Complete Task</button>
        <button onClick={onDelete}>Delete Task</button>
      </div>
    </StyledComponent>
  )
}

export default observer(TodoListItem);
