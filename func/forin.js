// "[prop] in obj"  =================
// obj 즉 객체 안에 특정 property가 존재하는지 확인할 수 있다. 

const user = {
    name: 'mihee'
};

console.log("name" in user); // true
console.log("age" in user);  // false



// for ( key in obj ) {} ===============
// 객체가 지닌 property의 수만큼 반복한다.
// key가 숫자인 경우에는 숫자 순서대로 출력하며, 
// 그외의 경우에는 객체 안에 구현된 순서대로 출력된다.
const language = {
    3: 'javascript',
    1: 'java',
    2: 'python'
}
for ( lang in language) {
    // 참고로 key(lang)는 고정된 값이 아니라 단순히 변수를 의미한다.
    console.log(lang," : ",language[lang])
                // 1  :  java
                // 2  :  python
                // 3  :  javascript
}

const framework = {
    javascript : 'express',
    java : 'spring',
    python : 'Django'
}

for ( fram in framework ) {
    console.log(fram, " : ", framework[fram])
                // javascript  :  express
                // java  :  spring
                // python  :  Django
}

