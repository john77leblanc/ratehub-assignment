import { observable } from 'mobx';
import { v4 as uuid } from 'uuid';


const createTodoStore = () => {
  const self = observable({
    items: [{
      id: uuid(),
      name: "Sample item",
      isComplete: false,
    }],

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
      });
    },
    setItemName(id, name) {
      self.findItem(id).name = name;
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
