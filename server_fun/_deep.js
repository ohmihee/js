const lodash = require('lodash')
// lodash의 cloneDeep을 이용하면 객체의 경우에도 참조값 즉 저장된 위치가 아닌 
// 값 자체를 복사하여 준다.
const test = [{a:1}]
const deep = lodash.cloneDeep(test);
console.log(deep[0]===test[0],'result===')