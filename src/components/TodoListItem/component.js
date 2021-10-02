import React from 'react'
import { observer } from 'mobx-react'

import { StyledComponent } from './styledComponent';

import Tags from '../Tags/index';


const TodoListItem = ({
  className,
  name,
  tags,
  inProgress,
  toggleInProgress,
  onComplete,
  onDelete,
  onChange,
  onAddTag,
  onRemoveTag
}) => {
  return (
    <StyledComponent className={className}>
      <input onChange={onChange} value={name} />
      <div className="tags w25">
        <Tags tags={tags} onAddTag={onAddTag} onRemoveTag={onRemoveTag} />
      </div>
      <div className="controls w25">
        <button onClick={toggleInProgress}>In Progress {inProgress && (<span>True</span>)}</button>
        <button onClick={onComplete} disabled={!inProgress}>Complete Task</button>
        <button onClick={onDelete}>Delete Task</button>
      </div>
    </StyledComponent>
  )
}

export default observer(TodoListItem);
