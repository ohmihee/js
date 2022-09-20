function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

console.log("start", new Date().toISOString());

// delay(1, (result) => {
//   console.log(1, result);
//   delay(1, (result) => {
//     delay(1, (result) => {
//       console.log(3, result);
//     });
//     console.log(2, result);
//   });
// });

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayP(1)
  .then((result) => {
    console.log(1, result);
    return delayP(1);
  })
  .then((result) => {
    console.log(2, result);
    return delayP(1);
  })
  .then((result) => {
    console.log(3, result);
    return delayP(3);
  });

console.log("hello");

const getData = (a, b, callback) => {
  return new Promise((resolve, reject) => {
    const value = callback(a, b);
    resolve(value);
  });
};

const callFun = (a, b) => a + b;

getData(1, 2, callFun)
  .then((result) => {
    setTimeout(() => {
      console.log("result1: ", result);
    }, 2 * 1000);
    return result + 1;
  })
  .then((result) => {
    setTimeout(() => {
      console.log("result2: ", result);
    }, 2 * 1000);
    return result + 1;
  })
  .then((result) => {
    setTimeout(() => {
      console.log("result2: ", result);
    }, 2 * 1000);
  });
