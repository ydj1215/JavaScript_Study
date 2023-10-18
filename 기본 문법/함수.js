// 함수 선언문 : function 키워드로 생성, 호이스팅에 영향을 받는다, 호출해야 실행
let test = 10000;
console.log(sum(10, 20));
console.log(sum(100, 200));

function sum(p1, p2) {
  // 전역변수가 함수의 결과값에 영향을 미치기 때문에 사용 권장 X
  //   return test + p1 + p2;

  return p1 + p2;
}
// 매개변수의 개수 만큼 인자를 주지 않았을 경우
console.log(sum(10)); // 오류는 발생하지 않는다.

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식으로 호이스팅 적용 X, 네이밍 함수와 익명 함수로 생성 가능, 익명 함수 사용 추천
const gugudan = function (num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

gugudan(5);

// 화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법
// 함수의 매개변수는 기본적으로 데이터 형식을 지정X
const gugudna_arrow = (num) => {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

gugudna_arrow(7);

// 기본값 할당
const _sum = (num1, num2 = 100) => {
  console.log(num1, num2);
  return num1 + num2;
};
console.log(_sum(10));

// 중괄호 생략 가능
const __sum = (num1, num2 = 100) => num1 + num2;
console.log(__sum(10));

// 스코프 : 변수가 생성되고 소멸되는 영역이자 영향을 미치는 범위를 의미한다.
// 전역 스코프
let a = 10;
const sum_scope = () => {
  console.log(`함수 내부 : ${a}`);
};

sum();
console.log(`함수 외부 : ${a}`);

// 지역 스코프 = 블록 스코프
const _sum_scope = () => {
  let a = 10;
  // 함수인 경우에는 var을 사용해도 오류가 발생한다.
  // var a = 10;
  console.log(`함수 내부 : ${a}`);
};
_sum_scope();

// a가 정의되지 않아 오류가 발생할 것이다
console.log(`함수 외부:${a}`);

function sum_var() {
  console.log(`함수 내부 : ${a}`);
  //   let a = 10;
  var a = 10;
  // 함수의 최상단까지는 호이스팅이 되어 let을 사용할 때는 오류가 발생하나, var을 사용한다면 오류가 발생하지 않는다.
  // 그러나 이러한 특성 때문에 var은 사용을 지양해야한다.
}
sum_var();

// 중괄호를 빠져나가는 var의 특성
let n = 10;
{
  // let의 경우 : 호이스팅의 특성을 가지지 않아 오류가 발생
  //   let b = 20;
  var m = 20;
  console.log(`코드 블록 내부 a : ${n}`);
  console.log(`코드 블록 내부 a : ${m}`);
}
console.log(`코드 블록 외부 a : ${n}`);
console.log(`코드 블록 외부 a : ${m}`);
