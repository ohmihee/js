const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

console.log(camelize("user-name"));

/**
 * arr.filter(조건식)
 * 조건식에 해당하는 요소만 반환하여 준다.
 */
const MZAge = (arr) => {
  return arr.filter((ele) => ele.age >= 18 && ele.age <= 41);
};

const people = [
  { name: "aPerson", age: 17 },
  { name: "bPerson", age: 25 },
  { name: "cPerson", age: 28 },
  { name: "dPerson", age: 18 },
  { name: "ePerson", age: 41 },
  { name: "fPerson", age: 42 },
  { name: "gPerson", age: 60 },
];

console.log(MZAge(people));
/**
[
  { name: 'bPerson', age: 25 },
  { name: 'cPerson', age: 28 },
  { name: 'dPerson', age: 18 },
  { name: 'ePerson', age: 41 }
]
 */

const MZFilter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18 || arr[i].age > 41) {
      arr.splice(i, 1);
      i--;
    }
  }
};

MZFilter(people);
console.log(people);
