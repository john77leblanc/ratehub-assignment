import { observable } from 'mobx';
import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';

export const filterFind = (task, filter) => {
  if (filter === null) return true;
  return task.tags.find(tag => tag.name === filter);
};

const createTodoStore = () => {
  const self = observable({
    items: [{
      id: uuid(),
      name: "Sample item",
      isComplete: false,
      tags: []
    }],
    allTags: [],
    filter: null,
    logs: [],

    get activeItems() {
      return self.items.filter(task => !task.isComplete)
        .filter(task => filterFind(task, self.filter));
    },
    get completedItems() {
      return self.items.filter(i => i.isComplete)
        .filter(task => filterFind(task, self.filter));
    },
    get allTaskTags() {
      return self.allTags;
    },
    get actionLog() {
      return self.logs;
    },

    findItem(id) {
      return self.items.find(i => i.id === id);
    },
    addItem() {
      let item = {
        id: uuid(),
        name: `Item ${self.items.length}`,
        tags: [],
        inProgress: false,
      }
      self.items.push(item);
      self.addLog(`Task "${item.name}" added.`);
    },
    setItemName(id, name) {
      let task = self.findItem(id);
      let oldName = task.name;
      task.name = name;
      self.addLog(`Task "${oldName}" updated to "${name}".`);
    },
    sortTags(task) {
      task.tags.sort((a,b) => a.name.localeCompare(b.name));
      
      return task.tags;
    },
    addTag(taskId, name) {
      let task = self.findItem(taskId);
      if (!task.tags.find(tag => tag.name === name)) {
        task.tags.push({id: uuid(), name});
        // Remove duplicates
        self.allTags = [...new Set(self.allTags.concat(task.tags.map(tag => tag.name)))].sort();
      }
      self.sortTags(task);
      self.addLog(`Tag "${name}" added to Task "${task.name}".`);
    },
    removeTag(taskId, id) {
      let task = self.findItem(taskId);
      let tag = task.tags.find((tag) => tag.id === id);
      task.tags = task.tags.filter((tag) => tag.id !== id);
      self.sortTags(task);
      self.addLog(`Tag "${tag.name}" removed from Task "${task.name}".`);
    },
    toggleInProgress(id) {
      let task = self.findItem(id);
      task.inProgress = !task.inProgress;
      self.addLog(`Task "${task.name}" toggled to ${task.inProgress ? 'in' : 'out of'} progress.`);
    },
    setCompleted(id) {
      let task = self.findItem(id);
      task.isComplete = true;
      self.addLog(`Task "${task.name}" completed.`);
    },
    setDelete(id) {
      let task = self.findItem(id);
      self.items.remove(task);
      self.addLog(`Task "${task.name}" deleted.`);
    },
    setFilter(name) {
      self.filter = name;
      self.addLog(`Filter changed to ${name === null ? 'All' : name}`);
    },
    addLog(log) {
      self.logs.push(log);
    }
  });

  return self;
}

const store = createTodoStore();
const StoreContext = createContext(store);

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export { createTodoStore, StoreProvider, useStore };
