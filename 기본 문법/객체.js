// 객체란? 자바스크립트에서 원시 타입을 제외한 모든 값이 객체
// 속성과 값의 쌍으로 구성
// 객체는 객체 리터럴을 사용하여, 속성(property)과 값(value)의 쌍으로 구성된다.
// 자바 스크립트에서 객체를 만드는 방법은 객체 리터럴을 사용하는 방법과 클래스를 사용하는 방법이 존재
// 객체 리터럴로 객체를 만드는 것이 간단하고 직관적

const person = {
  title: `지구오락실`,
  name: `김영희`,
  age: 20,
  job: `아이돌`,
};

const person2 = {
  name: {
    firstName: `유진`,
    lastName: `안`,
  },
  age: 21,
  isAdult: true,
  info: function () {
    return `이름 : ${this.name.firstName} ${this.name.lastName},
        나이 : ${this.age}`;
  },
};

console.log(person2.info());
console.log(person2[`name`]);
console.log(person2[`isAdult`]);

// person2 가 상수 값인데도 내부의 값은 변경이 가능하다.
// 참조하는 주소값은 동일하기 때문이다.
person2.name.firstName = "Youjin";
person2.name.lastNameName = "An";
console.log(person2.info());

// 객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = `제네시스GV80쿠페`;
carInfo.year = `2023/10/18`;
carInfo.maxSpeed = `235km`;

delete carInfo.year;
console.log(carInfo());

// 객체 메서드 : 객체 내부에서 동작하는 함수
// 속성(property)에 저장된 값의 타입이 함수일때 이를 객체 메서드라고 한다.

const person3 = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person3.sayHello();
// 생성자로 객체 생성하기
// 함수의 이름이지만 객체를 생성하기 위해 사용하기 때문에 대문자로 시작
function Person(name, age, addr, job) {
  this.name = name;
  this.age = age;
  this.addr = addr;
  this.job = job;
}

const person_1 = new Person("안유진", 21, "서울시 강남구 역삼동", "아이브");
const person_2 = new Person("장원영", 20, "서울시 강남구 청담동", "아이브");

console.log(person_1);
console.log(person_2);
