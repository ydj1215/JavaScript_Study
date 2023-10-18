// 1-1. 참조 우선 순위
let a = 10;
const b = 20;

const sum = () => {
  let a = 50;
  const b = 70;
  console.log(`함수 내부 a : ${a}`);
  console.log(`함수 내부 b : ${b}`);
};

// 지역 변수가 우선, 오류 발생 X
sum();

// 1-2
let c = 10;
let d = 20;

{
  let c = 30;
  let d = 40;
  console.log(`${c}`);
  console.log(`${d}`);
}

// 2. 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수
(function () {
  init();
})();

function init() {
  console.log(`초기화 루틴을 수행합니다.`);
}

// 즉시 실행 함수 예제
const square = (function (x) {
  return x * x;
})(4);
// 바로 실행 가능
console.log(square);

