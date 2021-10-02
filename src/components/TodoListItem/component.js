import React from 'react'
import { observer } from 'mobx-react'

import { StyledComponent } from './styledComponent';


const TodoListItem = ({ className, name, onComplete, onChange }) => {
  return (
    <StyledComponent className={className}>
      <input onChange={onChange} value={name} />
      <div className="controls">
        <button onClick={onComplete}>Complete Task</button>
        <button onClick={onComplete}>Delete Task</button>
      </div>
    </StyledComponent>
  )
}

export default observer(TodoListItem);
