// 비교, 동등 연산자
console.log(1 == "1");
console.log(1 == true);
console.log(1 == false);

// 부등 연산자
console.log(1 != "1");
console.log(1 != true);
console.log(1 != false);

// 일치 연산자 (===) : 두 값이 같은지를 비교하는데, 데이터 타입도 함께 확인
console.log(1 === "1");
console.log(1 === true);
console.log(1 === false);

console.log(1 !== "1");
console.log(1 !== true);
console.log(1 !== false);

// 형 변환 : 묵시적 형 변환, 명시적 형변환
let num1 = 10 + Number("10");
console.log(num1);

const number = 10;
const str = String(number);
console.log(str + 1);

// 반복문 : while, do~while, for, for-in, for-of
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

// 고객이 구입 가능한 음료 리스트 구하기
let pruductList = [
  { name: "레쓰비", price: 700 },
  { name: "티오피", price: 1500 },
  { name: "이프로", price: 800 },
  { name: "포카리", price: 1000 },
  { name: "핫식스", price: 1200 },
];

let inputCoin = 800;
let outputList = []; // 빈 배열 생성
for (let i = 0; i < pruductList.length; i++) {
  if (pruductList[i].price <= inputCoin) {
    outputList.push(pruductList[i]);
  }
}

console.log(outputList);

// for-in 문 : 개체의 프로퍼티를 열거하는데 사용
let person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};
for (let key in person) {
  console.log(person[key]);
} // key의 값을 이용하여 해당하는 값 출력

// for-of : 향상된 for문과 유사
let br = ["애플", "구글", "페이그북"];
for (let e of br) {
  console.log(e);
}
