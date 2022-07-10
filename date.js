// getFullYear()
// getMonth()
// getDate()
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()
// getDay() // 0이 일요일

function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // 함수 bench를 각 함수(diffSubtract, diffGetTime)별로 10번씩 돌립니다.
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  console.log( 'diffSubtract에 소모된 시간: ' + time1 );
  console.log( 'diffGetTime에 소모된 시간: ' + time2 );


// 요일 구하기
  function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 2014년 1월 3일
  console.log( getWeekDay(date) ); // FR


// https://ko.javascript.info/date