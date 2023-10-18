// 콜백 : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 때 호출되는 함수
// 비동기적 작업을 처리할 때 빈번하게 사용

function cry() {
  console.log(`cry`);
}

function sing() {
  console.log(`sing`);
}

function dance() {
  console.log(`dance`);
}

// 만약 일반 함수로 구현한다면?
function checkMood(mood) {
  if (mood === `good`) sing();
  else cry();
}

// checkMood(`sad`);

// 콜백 함수로 구현한다면?
function checkMoodCallback(mood, goodCall, badCall) {
  if (mood === `good`) goodCall();
  else badCall();
}

// 상황에 맞는 함수를 인자로 주어 동작을 변경 가능
checkMoodCallback(`good`, dance, cry);
checkMoodCallback(`good`, sing, cry);

// Callback 및 타이머 설정 예제
function buyTobe(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
  console.log(`계산이 필요합니다.`);
  let total = price * quantity;

  // 2(2000 밀리초)초 후에 다음 동작을 수행
  setTimeout(function () {
    callback(total);
  }, 2000);
}

function pay(n) {
  console.log(`지불할 금액은 : ${n}원 입니다.`);
}

buyTobe("노트북", 1000000, 2, pay);

// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수를 접근할 수 있는 매커니즘
// 외부로 나가버리면 전역 변수 개념이 되어 버린다.
// 사이에 있는 변수에 접근하는 경우를 클로저라고 한다.
function makeCounter() {
  let count = 100;
  return function () {
    // 내부 함수가 클로저, 외부 함수의 범위에 접근이 가능, 즉 내부 함수는 외부 함수에 선언된 변수에 접근 가능
    count++;
    console.log(count);
  };
}
const counter = makeCounter();
counter(); // 내부 함수를 호출
counter();
counter();
