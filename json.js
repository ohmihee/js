// JSON.stringify 
// 객체를 JSON으로 바꾸어 준다.
// 객체는 JSON과 같은 형태로 변환한 후에 네트워크 상에서 데이터 전송이 가능하다.

// JSON.parse 
// json을 객체로 바꾸어 준다.

const user = {
	name: 'mihee',
    age: 27,
    hobby: 'sleep'
}

const jsonUser = JSON.stringify(user);

console.log(jsonUser)
// {"name":"mihee","age":27,"hobby":"sleep"}

const parseUser = JSON.parse(jsonUser);

console.log(parseUser)