const log = console.log;

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iteraotr = iterable[Symbol.iterator]();
// log(iteraotr.next());
// log(iteraotr.next());
// log(iteraotr.next());
// log(iteraotr.next());
// { value: 3, done: false }
// { value: 2, done: false }
// { value: 1, done: false }
// { done: true }

for (const a of iterable) {
  log(a);
}
