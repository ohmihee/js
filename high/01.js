let count = 0;
let fun = {
  count: 3,
  setCounter: function () {
    console.log(this);
    console.log(this.count);
    console.log(count);
  },
};

fun.setCounter();
// 3
// 0

let arrowFun = {
  count: 2,
  setCounter: () => {
    console.log(this);
    console.log(count);
    console.log(this.count);
  },
};
// fun.setCounter();
arrowFun.setCounter();
