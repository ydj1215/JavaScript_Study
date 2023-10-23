/*
forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메서드
map() : 배열의 모든 요소를 순회하며 새로운 배열을 생성
filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 생성
reduce() : 배열의 모든 요소를 순회하며, 순회 과정에서 누적값을 사용하여 하나의 결과값을 생성
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((e) => console.log(e));

const squares = numbers.map((e) => e * e);
console.log(squares);

const even = numbers.filter((e) => e % 2 == 0);
console.log(even);

const sum = numbers.reduce((total, e) => total + e, 0);
// total 은 0으로 시작
// e에 1,2,3..7 이 순차적으로 할당
// 누적값을 업데이트
console.log(sum);

// 전개 연산자 (...) : 배열 두개를 병합 및 추가할 때 사용
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, w: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// 전개 연산자를 사용해서 임의의 수를 받을 수 있다.
function sum_(...numbers) {
  return numbers.reduce((tot, e) => tot + e, 0);
}
console.log(sum_(1, 2, 3, 4, 5, 6, 7, 8, 9));
