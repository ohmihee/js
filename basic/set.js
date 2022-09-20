// set
// new Set()
// set.add()
// set.delete()
// set.has()
// set.clear()
// set.size
// set.keys()
// set.values()
// set.entries()

const set = new Set()

const john = { name: 'John'}
const pete = { name: 'pete'}
const mary = { name: 'mary'}

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);

set.forEach((value, valueAgain, set) => {
    console.log(value)
})

console.log(set.size)

const set2 = new Set()

// 배열에서 중복 요소 제거하기
const unique = (arr) => {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))

// 에너그램 걸러내기
const aclean = (arr) => {
    let map = new Map();

    for (let word of arr) {
        let sorted = word // PAN
            .toLowerCase() //pan
            .split('') // ['p','a','n']
            .sort() // ['a','n','p']
            .join(); // anp
        map.set(sorted, word);//map.set('anp', 'nap') or map.set('anp', 'PAN')
    }
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))

// 반복가능한 객체의 키 
let map3 = new Map();

map3.set('name','jhon');

let keys = Array.from(map3.keys());
keys.push('more');
console.log(keys)
