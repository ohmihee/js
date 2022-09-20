/**
 * [prop] in obj
 * obj(=객체) 안에 특정 property의 존재 여부에 따라 true / false 를 반환하여 준다.
 */
const fruits = {
  apple: {
    color: "red",
  },
};

console.log("apple" in fruits); // true
console.log("banana" in fruits); // false

/**
 * for ( key in obj ) {}
 * obj(=객체)가 지닌 property의 수만큼 반복한다. 속성명이 숫자인 경우에는 숫자 순서대로 출력되며, 그외에는 객체 순서대로 출력한다.
 */
const middleClass = {
  1: {
    name: "김지민",
    math: 80,
    english: 60,
    total: 0,
  },
  2: {
    name: "유희진",
    math: 90,
    english: 80,
    total: 0,
  },
  3: {
    name: "서예진",
    math: 99,
    english: 99,
    total: 0,
  },
};

for (key in middleClass) {
  middleClass[key].total = middleClass[key].math + middleClass[key].english;
}

console.log(middleClass);
