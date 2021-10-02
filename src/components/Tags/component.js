import React, { useRef } from 'react';
import { StyledComponent } from './styledComponent';

const Tags = ({ tags, onAddTag, onRemoveTag }) => {
  const tagInput = useRef();

  const handleAddTag = () => {
    if (tagInput.current.value.length) onAddTag(tagInput.current.value);
    tagInput.current.value = '';
  };

  const handleRemoveTag = (e) => {
    onRemoveTag(e.target.id);
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

export default Tags;
