/* arr.some(조건[currentValue, index, array]) ==================================================
index와 array는 optional
*/

const array = [1,2,3,4,5];
const even = (ele) => ele % 2 === 0;

console.log(array.some(even));
// true 출력
// 배열 요소 중 하나라도 해당 조건을 충족하면 true 출력

const array2 = [1,3,5,7,9];
const even2 = (ele) => ele % 2 === 0;

console.log(array2.some(even2));
// false 출력
// 배열 중 모든 요소가 조건을 충족하지 못해 false 출력

/* 배열에 특정 값이 존재하는지 확인 ===========================================================*/
const fruits = ['apple', 'banana', 'mango', 'peach'];

const checkAvailability = (arr, val) => {
    return arr.some((arrVal)=>{
        return val == arrVal
    })
}

console.log(checkAvailability(fruits, 'apple'));
// true
console.log(checkAvailability(fruits, 'guava'));
// false

/* 값의 타입 boolean으로 변환 ===============================================================*/
const values = [true, 'true', 1];
const getBoolean = (a) => {
    let value = a;
    if (typeof a === 'string') {
        value = value.toLowerCase().trim();
    }
    return values.some((t)=>{
        return t === value;
    })
}

console.log(getBoolean(false)); // false
console.log(getBoolean('false')); // false
console.log(getBoolean(1)); // true
console.log(getBoolean('true')); // true