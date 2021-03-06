import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { observer } from 'mobx-react';
import { StyledComponent } from './styledComponent';
import { useStore } from '../TodoList/store';


const Tags = ({ className, taskId, tags }) => {
  const store = useStore();
  const tagInput = useRef();

  const handleAddTag = () => {
    if (tagInput.current.value.length) store.addTag(taskId, tagInput.current.value);
    tagInput.current.value = '';
  };

  return (
    <StyledComponent className={className}>
      <div className="tagEntry">
        <input
          type="text"
          ref={tagInput}
          placeholder="Type here"
        />
        <button type="button" onClick={handleAddTag}>Add Tag</button>
      </div>
      {!!tags.length && (
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <i>{tag.name}</i>
              <button
                type="button"
                id={tag.id}
                name={tag.name}
                onClick={() => store.removeTag(taskId, tag.id)}
                aria-label="Remove tag"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledComponent>
  );
};

Tags.propTypes = {
  className: PropTypes.string,
  taskId: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Tags.defaultProps = {
  className: '',
};

export default observer(Tags);
