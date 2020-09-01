import { paginateIndex } from '../src';

describe('blah', () => {
  it('works', () => {
    let items = paginateIndex({
      currentPage: 1,
      itemPerPage: 10,
      totalItemNumber: 200,
      maxAfterPage: 1,
      maxCenterPage: 3,
      maxBeforePage: 1,
    });
    expect(items).toEqual([1, 2, 3, '...', 20]);

    items = paginateIndex({
      currentPage: 3,
      itemPerPage: 10,
      totalItemNumber: 200,
      maxAfterPage: 1,
      maxCenterPage: 3,
      maxBeforePage: 1,
    });
    expect(items).toEqual([1, 2, 3, 4, '...', 20]);

    items = paginateIndex({
      currentPage: 10,
      itemPerPage: 10,
      totalItemNumber: 200,
      maxAfterPage: 1,
      maxCenterPage: 3,
      maxBeforePage: 1,
    });
    expect(items).toEqual([1, '...', 9, 10, 11, '...', 20]);

    items = paginateIndex({
      currentPage: 10,
      itemPerPage: 10,
      totalItemNumber: 200,
      maxAfterPage: 2,
      maxCenterPage: 3,
      maxBeforePage: 2,
    });
    expect(items).toEqual([1, 2, '...', 9, 10, 11, '...', 19, 20]);

    items = paginateIndex({
      currentPage: 18,
      itemPerPage: 10,
      totalItemNumber: 200,
      maxAfterPage: 1,
      maxCenterPage: 3,
      maxBeforePage: 1,
    });
    expect(items).toEqual([1, '...', 17, 18, 19, 20]);
  });
});
