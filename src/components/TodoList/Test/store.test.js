import { filterFind } from '../store';


describe('Task Filter by Tags', () => {
  const filter = 'One';
  const tag = { name: 'One' };
  const task = { tags: [tag] };

  it('returns true if the task contains a tag that matches the filter.', () => {
    expect(filterFind(task, filter))
      .toEqual(true);
  });

  it('returns false if the task does not contain a tag that matches the filter.', () => {
    expect(filterFind(task, 'Two'))
      .toEqual(false);
  });

  it('returns true if the filter is null.', () => {
    expect(filterFind(task, null))
      .toEqual(true);
  });
});
