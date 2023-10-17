// 변수와 상수 : var / let, const (es6에서 추가)
// var : es6 이전에 사용하던 변수 문법으로, 호이스팅이라는 특징을 가지고 있다.
// let : 변수 선언 문법, 자바의 변수와 동일한 형태로, 중복 선언 불가, 재할당은 가능
// const : 상수 선언, 재할당 불가

// (1) var을 사용하면 안되는 이유
console.log(a);
var a = 100;
// 위의 코드에서 오류가 뜨지 않는 것이 호이스팅이다. 위의 코드는 아래의 주석과 같은 의미를 가진다.
/*
var a;
console.log(a);
a = 100
*/

// 오류 발생 X
var a = 200;
console.log(a);

// (2) let
console.log(a);
let a = 100; // 오류 발생

let b = 100;
b = 200;
console.log(b);

// 함수는 끌어올려진다.
console.log(sum(10, 20));

function sum(x, y) {
  return x + y;
}
