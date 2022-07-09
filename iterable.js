// iterable 객체 
for (let char of 'test') {
    //console.log(char)
}

// Array.from
const arrayLike = {
    0: 'hello',
    1: 'world',
    length: 2
}

let arr = Array.from(arrayLike);

console.log(arr.pop('hello')); 
console.log(arr)

const range = [1,2,3,4];

const arr2 = Array.from(range, num=> num * num);

console.log(arr2)  //[1,4,9,16]

