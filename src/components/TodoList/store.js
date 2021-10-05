import React, { createContext, useContext } from 'react';
import { observable } from 'mobx';
import { v4 as uuid } from 'uuid';
import { PropTypes } from 'prop-types';


export const filterFind = (task, filter) => {
  if (filter === null) return true;
  return task.tags.find((tag) => tag.name === filter) !== undefined;
};

const createTodoStore = () => {
  const self = observable({
    items: [{
      id: uuid(),
      name: 'Sample item',
      isComplete: false,
      tags: [],
    }],
    allTags: [],
    filter: null,
    logs: [],

    get activeItems() {
      return self.items.filter((task) => !task.isComplete)
        .filter((task) => filterFind(task, self.filter));
    },
    get completedItems() {
      return self.items.filter((task) => task.isComplete)
        .filter((task) => filterFind(task, self.filter));
    },
    get allTaskTags() {
      return self.allTags;
    },
    get actionLog() {
      return self.logs;
    },

    findItem(id) {
      return self.items.find((item) => item.id === id);
    },
    addItem() {
      const item = {
        id: uuid(),
        name: `Item ${self.items.length}`,
        tags: [],
        inProgress: false,
      };
      self.items.push(item);
      self.addLog(`Task "${item.name}" added.`);
    },
    setItemName(id, name) {
      const task = self.findItem(id);
      const oldName = task.name;
      task.name = name;
      self.addLog(`Task "${oldName}" updated to "${name}".`);
    },
    sortTags(task) {
      task.tags.sort((a, b) => a.name.localeCompare(b.name));
      return task.tags;
    },
    addTag(taskId, name) {
      const task = self.findItem(taskId);
      if (!task.tags.find((tag) => tag.name === name)) {
        task.tags.push({ id: uuid(), name });
        // Remove duplicates
        self.allTags = [...new Set(self.allTags.concat(task.tags.map((tag) => tag.name)))].sort();
      }
      self.sortTags(task);
      self.addLog(`Tag "${name}" added to Task "${task.name}".`);
    },
    removeTag(taskId, id) {
      const task = self.findItem(taskId);
      const taskTag = task.tags.find((tag) => tag.id === id);
      task.tags = task.tags.filter((tag) => tag.id !== id);
      self.sortTags(task);
      self.addLog(`Tag "${taskTag.name}" removed from Task "${task.name}".`);
    },
    toggleInProgress(id) {
      const task = self.findItem(id);
      task.inProgress = !task.inProgress;
      self.addLog(`Task "${task.name}" toggled to ${task.inProgress ? 'in' : 'out of'} progress.`);
    },
    setCompleted(id) {
      const task = self.findItem(id);
      task.isComplete = true;
      self.addLog(`Task "${task.name}" completed.`);
    },
    setDelete(id) {
      const task = self.findItem(id);
      self.items.remove(task);
      self.addLog(`Task "${task.name}" deleted.`);
    },
    setFilter(name) {
      self.filter = name;
      self.addLog(`Filter changed to ${name === null ? 'All' : name}`);
    },
    addLog(log) {
      self.logs.push(log);
    },
  });

  return self;
};

const store = createTodoStore();
const StoreContext = createContext(store);

const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useStore = () => useContext(StoreContext);

export { createTodoStore, StoreProvider, useStore };
