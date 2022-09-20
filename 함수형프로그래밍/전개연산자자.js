const log = console.log;
const arr = [1, 2, 3];
const set = new Set([1, 2, 3, 4]);
const map = new Map([
  [1, "a"],
  [2, "b"],
]);
const a = [1, 2];

// log([...a, ...[3, 4]]);
log([...a, ...arr, ...set, ...map.values()]);
// 1 2 3 4
