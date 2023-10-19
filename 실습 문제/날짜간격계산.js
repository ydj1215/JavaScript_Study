let myDate = new Date();
let remainTime = 1708473600 - myDate.getTime() / 1000;
console.log(remainTime);
let remainDay = Math.ceil(remainTime / 24 / 3600);
// console.log(remainDay);
const result = document.querySelector(`.remain_day`);
result.innerHTML = remainDay;
