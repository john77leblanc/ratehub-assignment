import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { StyledComponent } from './styledComponent';
import { useStore } from '../TodoList/store';


const Tags = ({ taskId, tags }) => {
  const store = useStore();
  const tagInput = useRef();

  const handleAddTag = () => {
    if (tagInput.current.value.length) store.addTag(taskId, tagInput.current.value);
    tagInput.current.value = '';
  };

  const handleRemoveTag = (e) => {
    store.removeTag(taskId, e.target.id);
  };

  return (
    <StyledComponent>
      <input
        type="text"
        ref={tagInput}
        className="tagEntry"
        placeholder="Type here"
      />
      <button onClick={handleAddTag}>Add Tag</button>
      {!!tags.length && (
        <ul>
          {tags.map(tag => (
            <li key={tag.id}>
              <i>{tag.name}</i>
              <button
                id={tag.id}
                name={tag.name}
                onClick={handleRemoveTag}
                aria-label="Remove tag"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledComponent>
  )
};

export default observer(Tags);
