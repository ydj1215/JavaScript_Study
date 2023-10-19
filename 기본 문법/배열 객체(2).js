// map() 메서드 : 배열의 각 요소를 변환하고, 그 결과를 새로운 배열로 반환하는 메서드로서 리액트에서 빈번하게 사용한다.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squaredNumbers = numbers.map((num) => {
//   return num * num;
// });
const squaredNumbers = numbers.map((num) => num * num); // 한 줄 표현 (return 이 생략되어있는것)
console.log(squaredNumbers);

// 날짜와 시간을 다루는 Date 객체
const date = new Date(`2022/12/25/18:00:00`);
console.log(date);
let myDate = new Date();
console.log(myDate.getFullYear() + `년`); // 현재 연도 출력
console.log(myDate.getMonth() + `월`); // 현재 월 출력
console.log(myDate.getDate() + `일`); // 현재 날짜 출력
console.log(myDate.getDay() + `(일요일 : 0)`); // 현재 요일 출력
console.log(myDate.getHours() + `시`); // 현재 시간 출력
console.log(myDate.getMinutes() + `분`); // 현재 분 출력
console.log(myDate.getSeconds() + `초`); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력
