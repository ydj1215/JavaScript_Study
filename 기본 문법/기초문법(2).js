// 문자열
let str = "문자열" + "연결 연산자 사용" + `이것도 사용 가능`;

// let name = '제 이름은 "유동재" 입니다.';
let name = "유동재";
let age = 23;
let addr = "경기도 수원시";
console.log(name);

// 템플릿 문자열 : ''(백틱)을 사용해서 만들며, ES6에서 추가
console.log(`저의 이름은 ${name}, 주소는 ${addr}`);
console.log("저의 이름은 ${name}, 주소는 ${addr}");

// 숫자형(Number) : 자바스크립트는 정수와 실수를 구분 X, 모두 숫자형으로 취급
let num1 = `A`;
console.log(typeof num1);

let sum = 0.1 + 0.2;
// 부동 소수점은 근사치 계산을 하기 때문에 정확한 정수값이 나오지 않는다.
console.log(sum); // 0.3000...04 : 근사치 계산법

// 논리형 : 참과 거짓 구분
let a = 20;
let isAdult = a > 18 ? true : false;
if (isAdult) console.log("성인입니다.");
else console.log("미성년자입니다.");

// undefined : 변수는 선언되었지만 아직 값이 정해지지 않았음을 의미한다. 개발자가 대입하는 자료형 X
let empty;
console.log(empty);

// null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워둘 때 사용
let empty2 = null;
console.log(empty2);

// undefined와 null을 묶어서 특수 자료형이라고 한다.

// 객체(object) : 자바 스크립트의 핵심 자로형
// 기본 자료형을 제외하고 자바스크립트의 대부분의 자료 구조는 객체로 이루어져 있다.
// 객체 자료형은 배열, 객체 리터럴, 함수 등이 존재한다.
// 배열 : 복수의 데이터를 정의 가능한 자료형
let score = [80, 90, 100, 88];
console.log(score);
console.log(typeof score);

// 자바 스크립트의 배열은 자바와는 다르게 모든 자료형을 저장 가능하다.
let array = ["아이브", "안유진", 21, true, [100, 99, 88]];
console.log(array);

// 객체 리터럴 : 객체를 정의하는 가장 간단한 방법이며, 자바 스크립트에서 가장 많이 사용되는 문법
// 객체 리터럴은 키와 값의 한쌍으로 구성되며 중괄호를 이용하여 생성한다.
let sc = {
  kor: 80,
  eng: 90,
  mat: 100,
  sci: 87, // 자바스크립트는 다음 요소가 존재하지 않더라도 , 를 붙여주는 것이 표준이다.
};

console.log(sc);
console.log(sc.kor);
console.log(sc["sci"]);

// 객체 리터럴 안의 함수
const person = {
  name: "유동재",
  age: 22,
  addr: "경기도 성남시",
  info: function () {
    return `저의 이름은 ${this.name}이고, 나이는 ${this.age}, 주소는 ${this.addr}입니다.`;
  },
};

console.log(person.info);
console.log(person.info());
