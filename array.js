// camelize 함수 user-info => userInfo ===========
const camelize = (str) => {
    return str
        .split('-')
        // ['user','info']
        .map((word, index) => index == 0
            ? word
            : word[0].toUpperCase() + word.slice(1))
        // T                      est 
        // Test
        // slice() : 인수로 준 값의 위치에서 부터 얕은 복사를 한다.
        .join('')
}

console.log(camelize('user-name'));
// userName

// 특정 범위 요소 찾기 ===========================
const filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b));
}

const filterRangeArr = [2, 4, 1, 8, 6];

const filterRangeResult = filterRange(filterRangeArr, 3, 7);

console.log(filterRangeArr)
// [ 2, 4, 1, 8, 6 ]
console.log(filterRangeResult);
// [ 4, 6 ]

// 특정 범위를 벗어난 요소 제거하기 =========
let filterRangeInPlaceArr = [6, 2, 7, 4, 8];

const filterRangeInPlace = (arr, a, b) => {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
            // 제거한 경우에는 뒤의 요소가 앞으로 오므로 i를 다시 1 줄여준다.
        }
    }
}

filterRangeInPlace(filterRangeInPlaceArr, 4, 7)

console.log(filterRangeInPlaceArr)
// [ 6, 7, 4 ]

// 정렬 =======================
// 내림차순
const sortArr = [4, 1, 6, 2, 3];

sortArr.sort((a, b) => b - a);

console.log(sortArr)
// [ 6, 4, 3, 2, 1 ]

// 오름차순

sortArr.sort();

console.log(sortArr)
// [ 1, 2, 3, 4, 6 ]

// 기존 배열 변경없이 새롭게 복사하여 정렬하기 =============
const notChangedArr = [3,5,2,7];

const copySorted = (arr) => {
    return notChangedArr.slice().sort();
}
const newArr = copySorted(notChangedArr);

console.log(notChangedArr);
// [ 3, 5, 2, 7 ]

console.log(newArr);
// [ 2, 3, 5, 7 ]

// 확장 가능한 계산기
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' ')
        let a =+ split[0]
        let op = split[1]
        let b =+ split[2];

        // let split = str.split(' '),
        // a =+ split[0]
        // op = split[1],
        // b =+ split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func
    }
}

const myCalculator = new Calculator;

myCalculator.addMethod('*', (a,b)=>{a * b});
myCalculator.addMethod('/', (a,b)=>{a / b});
myCalculator.addMethod('/**', (a,b)=> {a ** b})

const calculateResult = myCalculator.calculate("1 + 6")
console.log(calculateResult)

// 이름 매핑하기 ============
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item=> item.name);
// map: 각 요소에 대해 함수를 호출한 결과를 모아 새로운 배열로 반환한다.
// map의 경우 인자에()=>{}이런 식으로 중괄호{}가 오면 함수의 시작으로 받아들이므로
// 객체형식으로 맞추기위해서는 ()=>({}) 이와 같이 괄호로 한 번 더 감싸준다. 
console.log(names);

// 객체 매핑하기============================ㄴ
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let mapUser = [ john2, pete2, mary2 ];

let usersMapped = mapUser.map((item)=>(
    {
        fullName:`${item.name} ${item.surname}`,
        id: item.id
    }
))

console.log(usersMapped)

// 나이 기준 객체 정렬 ==========
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = (arr) => {
    arr.sort((a,b) => a.age - b.age)
}

sortByAge(arr);

console.log(arr)

// 평균 연령 구하기 =========================
const getAverageAge = (users) => {
    return (users.reduce((prev, user) => prev + user.age, 0) /users.length).toFixed(1)
}

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let arr2 = [ john, pete, mary ];

console.log ( getAverageAge( arr2))

// 중복 없는 요소 찾기 =====================
const unique = (arr) => {
    let result = [];
    for(let str of arr) {
        if(!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}

const strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings))

// Create keyed object from array
let users3 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

const groupById = (arr) => {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

const userById = groupById(users3);

console.log(userById)


