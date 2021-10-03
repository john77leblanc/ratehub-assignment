import React, { useState } from 'react';
import { observer } from 'mobx-react';

import createTodoStore from './store';
import TodoListItem from '../TodoListItem/index';
import Filter from '../Filter/index';

import { StyledComponent } from './styledComponent';


const TodoList = ({ className }) => {
  const [store] = useState(createTodoStore);

  return (
    <StyledComponent className={className}>
      <header>
        <h1 className="title">TODO List Example</h1>
      </header>
      <section>
        <h2>Tasks</h2>
        <ul className="incompleteTasks">
          {store.activeItems.map(item => (
            <TodoListItem
              key={item.id}
              name={item.name}
              tags={item.tags}
              inProgress={item.inProgress}
              isComplete={item.isComplete}
              toggleInProgress={() => store.toggleInProgress(item.id)}
              onComplete={() => store.setCompleted(item.id)}
              onDelete={() => store.setDelete(item.id)}
              onChange={(e) => store.setItemName(item.id, e.target.value)}
              onAddTag={(name) => store.addTag(item.id, name)}
              onRemoveTag={(id) => store.removeTag(item.id, id)}
            />
          ))}
        </ul>
        <button
          className="addTask"
          onClick={store.addItem}
        >
          Add New Item
        </button>
      </section>
      <footer>
        <p>Filter by: <Filter options={store.allTaskTags} /></p>
        <h2 className="completedTitle">Completed Items</h2>
        <ul className="completeTasks">
          {store.completedItems.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </footer>
    </StyledComponent>
  )
}

export default observer(TodoList);
