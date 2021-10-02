import React from 'react'
import { observer } from 'mobx-react'

import { StyledListItem } from './styledListItem';


function TodoListItem({ className, name, onComplete, onChange }) {
  return (
    <StyledListItem className={className}>
      <input onChange={onChange} value={name} />
      <div className="controls">
        <button onClick={onComplete}>Complete Task</button>
        <button onClick={onComplete}>Delete Task</button>
      </div>
    </StyledListItem>
  )
}

export default observer(TodoListItem);
