// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );


// 각 프로퍼티값 더하기 
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

const sumValue = (arr) => {
    let sum = 0;
    for (let ele of Object.values(arr)) {
        sum += ele
    }
    return sum
}


console.log(sumValue(salaries))

const sumValue2 = (arr) => {
    return Object.values(arr).reduce((a,b) => a + b, 0)
}

console.log(sumValue2(salaries))