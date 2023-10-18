// 표준 내장 객체 : 자바 스크립트에서 개발의 편의를 위해 미리 만들어 놓은 것
// 문자열 다루는 String 객체
// length : 메서드가 아닌 속성으로 존재, 문자열의 길이를 반환

const pw = `1234`;
if (pw.length < 6) {
  console.log(`비밀 번호의 길이는 최소 여섯 자리 이상입니다.`);
  console.log(`입력 받은 비밀번호의 길이는 ${pw.length}자리 입니다.`);
} else {
  console.log(`비밀 번호의 길이가 적절합니다.`);
}

// 특정 문자열 포함 여부 확인
const email = `test!naver.com`;
if (email.includes(`@`) === false) {
  console.log(`올바른 메일 형식이 아닙니다.`);
}

// 대상 문자열과 일치하는 첫 번째 문자의 인덱스를 반환, 찾지 못하면 -1을 반환
const email_2 = `test!naver.com`;
if (email_2.indexOf(`@`) === -1) {
  console.log(`올바른 메일 형식이 아닙니다.`);
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 마지막에 발견된 문자열의 index를 반환, 0부터 시작
const email_3 = `test!naver.com`;
if (email_3.lastIndexOf(`!`) !== -1) {
  console.log(email_3.lastIndexOf("!"));
}

// slice() : 시작 위치와 종료 위치가 주어지면, 문자열에서 해당 부분을 잘라낸다.
const str = `Apple, Banana, Kiwi`;
// const rst = str.slice(2, 7);
const rst = str.slice(7); // 7번째 인덱스부터 끝까지
console.log(rst);

// replace : 대체
const newStr = str.replace(`Kiwi`, `Orange`);
console.log(newStr);

// concat() : 두 개 이상의 문자열을 하나의 문자열로 합치는 함수
const text_1 = `Hello`;
const text_2 = `World`;
const text_3 = text_1.concat(` ` + text_2);
console.log(text_3);

// padStart(targetLength, padString)
let str40 = `5`;
str40 = str40.padStart(4, 0); //0005
console.log(str40);

// split
let birthday = `1997-06-12`;
let arr_2 = birthday.split(`-`);
console.log(arr_2);

// Number 객체 : 숫자와 관련된 작업을 할때 사용하는 메서드
console.log(Number.parseFloat(`12`));
console.log(Number.parseFloat(`12.34`));
console.log(Number.parseFloat(`12문자열`)); // 12
console.log(Number.parseFloat(`12 34 56`));
console.log(Number.parseFloat(`문자열56`)); // NaN

Number.parseInt("12");
Number.parseInt(`12.34`);
Number.parseInt(`12문자열`);
Number.parseInt(`12 34 56`);
Number.parseInt(`문자열56`); // NaN
