# paginate-index

Create a paging index number

## Example

```ts
import { paginateIndex } from 'paginate-index';

// [1, 2, 3, '...', 20]
console.log(paginateIndex({
  currentPage: 1,
  itemPerPage: 10,
  totalItemNumber: 200,
  maxAfterPage: 1,
  maxCenterPage: 3,
  maxBeforePage: 1,
}))

// [1, 2, 3, 4, '...', 20]
console.log(paginateIndex({
  currentPage: 3,
  itemPerPage: 10,
  totalItemNumber: 200,
  maxAfterPage: 1,
  maxCenterPage: 3,
  maxBeforePage: 1,
}))

// [1, '...', 9, 10, 11, '...', 20]
console.log(paginateIndex({
  currentPage: 10,
  itemPerPage: 10,
  totalItemNumber: 200,
  maxAfterPage: 1,
  maxCenterPage: 3,
  maxBeforePage: 1,
}))

// [1, 2, '...', 9, 10, 11, '...', 19, 20]
console.log(paginateIndex({
  currentPage: 10,
  itemPerPage: 10,
  totalItemNumber: 200,
  maxAfterPage: 2,
  maxCenterPage: 3,
  maxBeforePage: 2,
}))

// [1, '...', 17, 18, 19, 20]
console.log(paginateIndex({
  currentPage: 18,
  itemPerPage: 10,
  totalItemNumber: 200,
  maxAfterPage: 1,
  maxCenterPage: 3,
  maxBeforePage: 1,
}))
```
