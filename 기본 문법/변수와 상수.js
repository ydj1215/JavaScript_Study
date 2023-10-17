// let : 변수
let isRed = false;

// const : 상수
const head = document.querySelector("#head-line");
head.onclick = function () {
  if (!isRed) {
    head.style.color = "red";
  } else {
    head.style.color = "blue";
  }
  isRed = !isRed;
};
