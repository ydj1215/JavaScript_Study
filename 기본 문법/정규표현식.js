// 정규표현식을 사용하여 문자열 검색, 대체, 추출 등을 수행, 패턴 매칭

// 정규식 리터럴 : /슬래시로 감싸는 방법/
// exec() : 패턴과 일치하는 문자열을 반환, 없으면 NULL
let targetStr =
  "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// g는 여러개를 찾겠다는 의미, g가 없다면 첫번째 한가지만 탐색
const pattern = /가장/g;
const result = pattern.exec(targetStr);
console.log(result);

// test() : 패턴과 일치하는 문자열이 있으면 true, 없으면 false;
const result_ = pattern.test(targetStr);
console.log(result_);

let phoneNumber = "010-5006-4146";
// d : 숫자, {개수}
const regex = /\d{3}-\d{4}-\d{4}/;
let rst = regex.test(phoneNumber);
console.log(rst);

const inputText = "안녕하세요. 제 번호는 010-5006-4146 입니다. 전화 주세요^^";
const regex_ = /\d{3}-\d{4}-\d{4}/;
let regNumber = inputText.match(regex_);
console.log(regNumber[0]);

