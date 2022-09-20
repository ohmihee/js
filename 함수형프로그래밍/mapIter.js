const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// const productsIter = products[Symbol.iterator]();
// let names = [];
// let prices = [];
// for (const a of productsIter) {
//   names.push(a.name);
//   prices.push(a.price);
// }
// log(names);
// log(prices);

const map = (products) => {
  let names = [];
  for (const p of products) {
    names.push(p.name);
  }
  return names;
};

const item = [{ name: "apple" }, { name: "banana" }, { name: "peach" }];

log(map(products));
log(map(item));
