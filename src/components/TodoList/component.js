import React, { useState } from 'react';
import { observer } from 'mobx-react';

import createTodoStore from './store';
import TodoListItem from './listItem';

import { StyledList } from './styledList';


const TodoList = ({ className }) => {
  const [store] = useState(createTodoStore);

  return (
    <StyledList className={className}>
      <header>
        <h1 className="title">TODO List Example</h1>
      </header>
      <section>
        <ul>
          {store.activeItems.map(item => (
            <TodoListItem
              key={item.id}
              name={item.name}
              isComplete={item.isComplete}
              onComplete={() => store.setCompleted(item.id)}
              onChange={(e) => store.setItemName(item.id, e.target.value)}
            />
          ))}
        </ul>
        <button onClick={store.addItem}>
          Add New Item
        </button>
      </section>
      <footer>
        <h2 className="completedTitle">Completed Items</h2>
        <ul>
          {store.completedItems.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </footer>
    </StyledList>
  )
}

export default observer(TodoList);
