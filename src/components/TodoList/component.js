import React from 'react';
import { observer } from 'mobx-react';

import { StoreProvider, useStore } from './store';
import TodoListItem from '../TodoListItem/index';
import Filter from '../Filter/index';

import { StyledComponent } from './styledComponent';
import ActionLog from '../ActionLog/component';


const TodoList = ({ className }) => {
  const store = useStore();
  
  return (
    <StoreProvider>
      <StyledComponent className={className}>
        <header>
          <h1 className="title">TODO List Example</h1>
        </header>
        <main>
          <section className="tasks card">
            <h2>Tasks</h2>
            <ul className="incompleteTasks">
              {store.activeItems.map(item => (
                <TodoListItem
                  key={item.id}
                  taskId={item.id}
                  name={item.name}
                  tags={item.tags}
                  inProgress={item.inProgress}
                  isComplete={item.isComplete}
                  onChange={(e) => store.setItemName(item.id, e.target.value)}
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
          <aside className="actionLog card">
            <h2>Action Log</h2>
            <ActionLog actions={store.actionLog} />
          </aside>
        </main>
        <footer className="card">
          <p>Filter by: <Filter options={store.allTaskTags} /></p>
          <h2 className="completedTitle">Completed Items</h2>
          <ul className="completeTasks">
            {store.completedItems.map(item => (
              <li key={item.id}>
                {item.name}
                {!!item.tags.length && (
                  <div className="completeTags">
                    {item.tags.map(tag => (
                      <span><i>{tag.name}</i></span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </footer>
      </StyledComponent>
    </StoreProvider>
  )
}

export default observer(TodoList);
