// oop
let user = {
    name:'mihee',
    age:27
};

const say = (ele) => {
    console.log(ele)
}

user.say = say

user.say('안녕하세요'); // 안녕하세요
user.say(`제 이름은 ${user.name}입니다.`); // 제 이름은 미희입니다.

user = {
    say1: function(ele) {console.log(ele)},
    say2(ele) {console.log(ele)},
    say3: (ele)=>{console.log(ele)}
}
// 위의 두 방법으로도 객체에 메서드를 할당할 수 있다.

user.say1('say1'); // sqy1
user.say2('say2'); // say2
user.say3('say3'); // say3

// this : 객체에 할당한 함수내에서 다른 객체의 값에 접근하려 할 때 사용
 let user2 = {
    name: 'mihee',
    say(ele) {
        console.log(`안녕하세요 제 이름은 ${this.name}, 나이는 ${ele}입니다.`);
        //안녕하세요 제 이름은 mihee, 나이는 27입니다.
    }
 }
 // this를 사용하거나 user.name을 사용하여 외부 변수를 참조해 객체에 접근할 수 있다.
let user3 = user2;
user2 = null;

user3.say(27)