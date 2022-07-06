// 자바스크립트 타입에서 원시값과 객체의 차이는 
// 원시값은 값 자체를 저장하지만 객체는 값이 저장된 위치를 저장한다는 것이다.

let user = { name: 'none'};

let admin = user;

admin.name = 'mihee';

console.log(user.name); // mihee
// mihee를 출력하는 이유는 user는 객체로 user.name의 값이 할당된 주소를 기억하고 있다.
// admin = user ;를 하게되면 admin도 user와 같은 위치를 참조하게 된다.
// 때문에 admin.name = 'mihee'를 통해 해당 위치에 저장된 값을 바꾸어 버리면
// 해당 위치를 함께 참조하는 user.name의 값도 바뀌게 된다.


 const test = [{a:1}]
 const deep = _.cloneDeep(test);
 console.log(deep[0]===test[0],'result===')