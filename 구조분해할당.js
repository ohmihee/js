let guest = 'user';
let admin = 'mihee';

[ guest, admin ] = [ admin, guest ];

console.log(guest);
console.log(admin)

// ...로 나머지 변수를 배열로 가져옴
let [name1, name2, ...rest ] = [ 'mihee1', 'mihee2', 'mihee3', 'mihee4'];

console.log(name1);
console.log(rest)

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // { 객체 프로퍼티: 목표 변수 }
  let {width: w, height: h, title} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200


const test = {
    name: 'mihee',
    age: 27
}


