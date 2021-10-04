import { observable } from 'mobx';
import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';


const createTodoStore = () => {
  const self = observable({
    items: [{
      id: uuid(),
      name: "Sample item",
      isComplete: false,
      tags: []
    }],
    allTags: [],

    get activeItems() {
      return self.items.filter(i => !i.isComplete);
    },
    get completedItems() {
      return self.items.filter(i => i.isComplete);
    },
    get allTaskTags() {
      return self.allTags;
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
    }
  })

  return self;
}

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
