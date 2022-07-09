// map ===================== 좀 더 알아본 후 추가
// key를 기준으로 하여 다양한 자료형의 데이터를 저장할 수 있다.
// key에도 value에 값을 할당하는 것과 같이 단순히 문자형뿐만이 아니라 number, boolean, object 등 다양한 형태로 설정할 수 있다.
// new Map() : 맵을 생성한다.
// map.set([key], [value]) : 해당 key에 대해 값을 저장한다.
// map.get([key]) : 해당 key에 할당되어 있는 값을 반환한다.
// map.has(key) : 해당 key를 가진 데이터가 존재하는지 여부에 따라 true, false를 반환한다.
// map.delete(key); : 해당 키에 대한 요소만을 삭제한다.
// map.clear() : 존재하는 모든 요소를 삭제한다.
// map.size()  : 전체 갯수를 반환하여 준다.

// map.keys()
// map.values()
// map.entries()
// 

const map = new Map();

map.set('1', 'str1');
map.set(true,'true');
map.set('str2','chain')
map.set('2','str2')
   .set('3', 'num1')

// console.log(map.get(map.get('2')))
// console.log(map.get('2'))

const map2 = new Map();

map2.set('name','mihee');
map2.set('age', 27);

console.log(map2.values());
for(let ele of map2.values()){
    console.log(ele)
}

for(let key of map2.keys()) {
    console.log(key)
}

for(let entry of map2.entries()) {
    console.log(entry)
}