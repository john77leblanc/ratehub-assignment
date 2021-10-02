import { observable } from 'mobx';
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
    updateTagData(taskId) {
      let task = self.findItem(taskId);
      task.tags.map((tag, index) => tag.id = index);
      task.tags = Array.from(task.tags);
    },
    addTag(taskId, name) {
      let task = self.findItem(taskId);
      task.tags.push({id: null, name});
      self.updateTagData(taskId);
    },
    removeTag(taskId, id) {
      let task = self.findItem(taskId);
      task.tags.splice(id, 1);
      self.updateTagData(taskId);
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

export default createTodoStore;
