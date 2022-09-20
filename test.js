// const fruits = {
//   apple: {
//     color: "red",
//   },
// };

// console.log("apple" in fruits); // true
// console.log("banana" in fruits); // false

const log = console.log;

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// const mapIter = map[Symbol.iterator]();
// log(mapIter);
// // [Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }
// log(mapIter.next()); // { value: [ 'a', 1 ], done: false }
// log(mapIter.next()); // { value: [ 'b', 2 ], done: false }
// log(mapIter.next()); // { value: [ 'c', 3 ], done: false }
// log(mapIter.next()); // { value: undefined, done: true }

// map.set(2, "진실인지 거짓인지 알 수 없음");

// log(map.get(true));
// log(map.get(false));
// log(map.get(2));

// // map.set(false, "false");
// // map.set(false, "거짓");
// // map.set(false, 0);

// // log(map.get(false));
// // 0

// const gameLevel = new Map();
// const level1 = { level: 1 };
// gameLevel.set(level1, { color: "green" });

// const level2 = { level: 2 };
// gameLevel.set(level2, { color: "blue" });

// log(gameLevel.get(level1)); // { color: 'green' }
// log(gameLevel.get(level2)); // { color: 'green' }

// log(gameLevel.keys()); // [Map Iterator] { { level: 1 }, { level: 2 } }
// const keys = gameLevel.keys();
// for (const a of keys) {
//   log(a);
//   //   { level: 1 }
//   //   { level: 2 }
// }

// log(gameLevel.values()); // [Map Iterator] { { color: 'green' }, { color: 'blue' } }
// const values = gameLevel.values();
// for (const a of values) {
//   log(a);
//   //   { color: 'green' }
//   //   { color: 'blue' }
// }

// log(gameLevel.entries());
// const entrires = gameLevel.entries();
// for (const a of entrires) {
//   log(a);
//   //   [ { level: 1 }, { color: 'green' } ]
//   //   [ { level: 2 }, { color: 'blue' } ]
// }

// const customers = new Set();

// const customers2 = new Set([
//   { name: "johh" },
//   { name: "marry" },
//   { name: "may" },
// ]);

// const john = { name: "john" };
// const marry = { name: "marry" };
// const may = { name: "may" };
// customers.add(john);
// customers.add(marry);
// customers.add(may);

// // log(customers.size); // 3

// // customers.add(john);
// // log(customers.size); // 3

// // log(customers.has(john));
// // // true

// // log("add: ", customers.add(marry));
// // // add:  Set(3) { { name: 'john' }, { name: 'marry' }, { name: 'may' } }

// // log("delete", customers.delete(marry));
// // // true

// // log("delete (not exist)", customers.delete(marry));
// // // false

// // log(customers);

// for (const a of customers) {
//   console.log(a);
//   // { name: 'john' }
//   // { name: 'may' }
// }
// const setKeys = customers.keys();
// const setValues = customers.values();
// const setEntries = customers.entries();

// log("iterator: ==", customers[Symbol.iterator]());
// const test = customers[Symbol.iterator]();
// log("next: ===", test.next());
// for (const a of test) {
//   console.log(a);
// }

// for (const a of setEntries) {
//   console.log(a);
// }

// log(gameLevel[Symbol.iterator]());
// const iter = gameLevel[Symbol.iterator]();
// log(iter.next());
// log(iter.next());
// log(iter.next());

const set = new Set([1, 2, 3]);

const setIter = set[Symbol.iterator]();
log(setIter); // [Set Iterator] { 1, 2, 3 }
log(setIter.next()); // { value: 1, done: false }
log(setIter.next()); // { value: 2, done: false }
log(setIter.next()); // { value: 3, done: false }
log(setIter.next()); // { value: undefined, done: true }
