function yo() {
  setTimeout(function () {
    console.log("1.5초 타이머 끝");
  }, 1500);
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log("3초 걸리는 for");
}

yo();
console.log("end main");

const x = "x";
function c() {
  const y = "y";
  console.log("c");
}

function a() {
  const x = "x";
  console.log("a");
  function b() {
    const z = "z";
    console.log("b");
    c();
  }
}

a();
c();

//a
//c
// c
