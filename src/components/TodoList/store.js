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

    addItem() {
      self.items.push({
        id: uuid(),
        name: `Item ${self.items.length}`,
      });
    },
    setItemName(id, name) {
      const item = self.items.find(i => i.id === id);
      item.name = name;
    },
    setCompleted(id) {
      const item = self.items.find(i => i.id === id);
      item.isComplete = true;
    },
  })

  return self;
}

export default createTodoStore;
