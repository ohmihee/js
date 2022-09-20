// weakmap
// weakmap의 키가 반드시 객체여야 한다. 원시값은 weakmap의 키가 될 수 없다.
// weakmap은 키싱이 필요할 때 유용하다.
// weakMap.get(key)
// weakMap.set(key, value)
// waekMap.delete(key)
// weakMap.has(key)

const weakMap = new WeakMap();

const obj = {
    name: 'mihee',
    age: true
};

weakMap.set(obj, 'true')


let cache = new Map();

const process = (obj) => {
    if(!cache.has(obj)) {
        let result = '연산...';
        cache.set(obj, result);
        console.log('실행')
    }

    return cache.get(obj)
}

let mihee = {
    name: 'mihee',
    age: 27
}

let result1 = process(mihee);
//console.log(result1);

let result2 = process(mihee);
//console.log(result2)

let cache2 = new WeakMap();

const process2 = (obj) => {
    if (!cache2.has(obj)) {
        let result = 'true'
        cache2.set(obj, result);
    }

    return cache2.get(obj)
}

let result3 = process2(mihee);
let result4 = process2(mihee);

console.log(result3);

mihee = null;


console.log(cache.size); 
// map의 경우는 해당 key를 null로 해도 메모리가 남아서 낭비된다.
// weakmap의 경우 key로 설정한 객체에 null을 할당하면 해당 메모리가 완전히 삭제된다.

// https://ko.javascript.info/weakmap-weakset