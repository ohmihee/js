const log = console.log;
// Array, map, set은 자바스크립트 내장객체로서 이터러블, 이터레이터 브로토콜을 따른다.

// - 이터러블 : 이터레이터를 리턴하는 [ Symbol.iterotor]( )를 가진 값

// - 이터레이터 : { value , done } 객체를 리턴하는 next()를 가진 값

// - 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약

// 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

// 제너레이터는 function* 으로 하여 생성한다.

// function* gen() {
//   yield 1;
//   yield 1;
// }
// let iter = gen();

// for (const a of iter) {
//   log(a);
//   // 1
//   // 1
//   // 1
// }

// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());
// // { value: 1, done: false }
// // { value: 1, done: false }
// // { value: 1, done: false }
// // { value: undefined, done: true }

// function* levels() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return "end";
// }

// let iter2 = levels();

// for (const a of iter2) {
//   log(a);
//   // 1
//   // 2
//   // 3
// }

// log(iter2.next()); // { value: 1, done: false }
// log(iter2.next()); // { value: 2, done: false }
// log(iter2.next()); // { value: 3, done: false }
// log(iter2.next()); // { value: 'end', done: true }

function* infinity(i = 0) {
  while (true) yield i++;
}
let iter2 = infinity();
// log(iter2.next()); // { value: 0, done: false }
// log(iter2.next()); // { value: 1, done: false }
// log(iter2.next()); // { value: 2, done: false }
// log(iter2.next()); // { value: 3, done: false }

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}
function* odds(l) {
  for (const a of infinity(1)) {
    yield a;
    if (a == l) return;
  }
  //   for (let i = 0; i <= l; i++) {
  //     if (i % 2) yield i;
  //   }
}

let iter = odds(10);
for (const a of iter) {
  log(a);
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}
let iter3 = limit(4, [1, 2, 3, 4, 5, 6]);
log(iter3.next()); // { value: 1, done: false }
log(iter3.next()); // { value: 2, done: false }
log(iter3.next()); // { value: 3, done: false }
log(iter3.next()); // { value: 4, done: false }
log(iter3.next()); // { value: undefined, done: true }

for (const a of odds(4)) {
  log(a);
}
log(...odds(4)); // 1 2 3 4
log([...odds(4)]); // [1, 2, 3, 4]
log([...odds(3), ...odds(3)]); // [ 1, 2, 3, 1, 2, 3 ]

const [first, ...left] = odds(3);
log(first); // 1
log(left); // [ 2, 3 ]
