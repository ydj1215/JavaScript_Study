// Array 객체 : 배열에서 사용 가능한 많은 속성과 메서드가 정의되어져 있다.

// forEach() : 배열의 요소를 자동 순회, 비파괴 메서드
const arr = [10, 20, 30, 40, 50, 60];
arr.forEach((e) => {
  //   console.log(e);
  console.log(e * e);
});

// toString() : 배열 안의 모든 문자를 쉼표를 이용하여 모두 결합하여 하나의 문자열로 반환
let fruits = [`Banana`, `Orange`, `Apple`, `Mango`];
console.log(fruits.toString());

// join() : 배열 안의 모든 문자를 지정한 문자를 이용해서 연결
let fruits_2 = [`Banana`, `Orange`, `Apple`, `Mango`];
console.log(fruits_2.join(`*`));

// pop() : 스택 자료 구조의 특성, 배열의 맨 마지막 데이터를 제거하고 결과를 반환
let fruits_3 = [`Banana`, `Orange`, `Apple`, `Mango`];
console.log(fruits_3.pop());

// push() : 스택 자료 구조의 특성, 배열의 맨 마지막에 데이터를 추가
fruits_3.push(`kiwi`);
console.log(fruits_3.toString());

// shift() : 첫 번째 요소를 제거하고, 첫 번째 요소를 반환
// 현재 Banana,Orange,Apple,kiwi
fruits_3.shift();
console.log(fruits_3.toString());

// unshift() : 맨 앞의 요소를 추가하고, 배열의 길이를 반환
fruits_3.unshift(`Lemon`);

// 배열의 인덱스로 접근해 값을 변경
fruits_3[0] = `Banana`;

// concat() : 두 개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

// slice()
let fruits_4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits_4.slice(3); // [Apple, Mango]
let citrus2 = fruits_4.slice(1, 3); // [Orange, Lemon]

// 정렬
let fruits_5 = ["Banana", "Orange", "Apple", "Mango"];
fruits_5.sort();
console.log(fruits_5);

fruits_5.reverse();
console.log(fruits_5);

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아 새로운 배열을 반환
let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

let pass = persons.filter((person) => person.point > 80);
console.log(pass);

const local = persons.filter((person) => (person.city = `서울`));
console.log(local);
