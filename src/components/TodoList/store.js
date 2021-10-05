import { observable, observe, reaction } from 'mobx';
import { observer } from 'mobx-react';
import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';

const filterFind = (task, filter) => {
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
    log: [],

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
      return self.log;
    },

    findItem(id) {
      return self.items.find(i => i.id === id);
    },
    addItem() {
      self.items.push({
        id: uuid(),
        name: `Item ${self.items.length}`,
        tags: [],
        inProgress: false,
      });
    },
    setItemName(id, name) {
      self.findItem(id).name = name;
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
    },
    removeTag(taskId, id) {
      let task = self.findItem(taskId);
      task.tags = task.tags.filter((tag) => tag.id !== id);
      self.sortTags(task);
    },
    toggleInProgress(id) {
      self.findItem(id).inProgress = !self.findItem(id).inProgress;
    },
    setCompleted(id) {
      self.findItem(id).isComplete = true;
    },
    setDelete(id) {
      self.items.remove(self.findItem(id));
    },
    setFilter(name) {
      self.filter = name;
    },
    addLog(log) {
      self.logs.push(log);
    }
  });

  return self;
}

// observe(this.obj, change => {
//   console.log(
//     `${change.type} ${change.name} from ${change.oldValue}` +
//       ` to ${change.object[change.name]}`
//   );
// });

const StoreContext = createContext(createTodoStore());

const StoreProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export { createTodoStore, StoreProvider, useStore };
