/**
 * arr.some(조건식)
 * 조건식에 따라 true / false를 반환한다.
 */
const item = [
  { code: "A100", category: "bottom" },
  { code: "A101", category: "bottom" },
  { code: "A102", category: "bottom" },
  { code: "A103", category: "bottom" },
];

const checkCode = (array, code) => {
  return array.some((ele) => {
    return ele.code == code;
  });
};

console.log(checkCode(item, "A100")); // true
console.log(checkCode(item, "A105")); // false

/* 값의 타입 boolean으로 변환 ===============================================================*/
const values = [true, "true", 1];
const getBoolean = (a) => {
  let value = a;
  if (typeof a === "string") {
    value = value.toLowerCase().trim();
  }
  return values.some((t) => {
    return t === value;
  });
};

console.log(getBoolean(false)); // false
console.log(getBoolean("false")); // false
console.log(getBoolean(1)); // true
console.log(getBoolean("true")); // true
