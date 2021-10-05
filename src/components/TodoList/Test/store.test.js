import { filterFind } from "../store";

const filter = 'Three';

const task1 = {
  tags: [{
    id: '1',
    name: 'One',
  },
  {
    id: '2',
    name: 'Two',
  }],
};

const task2 = {
  tags: [{
    id: '3',
    name: 'Three',
  },
  {
    id: '4',
    name: 'Four',
  }],
};

const sampleTasks = [task1, task2];

describe('Task Filter by Tags', () => {
  it('filters tasks by tag.', () => {
    expect(sampleTasks.filter((task) => filterFind(task, filter)))
      .toEqual([task2]);
  });

  it('should not filter if filter is null.', () => {
    expect(sampleTasks.filter((task) => filterFind(task, null)))
      .toEqual(sampleTasks);
  });
});
