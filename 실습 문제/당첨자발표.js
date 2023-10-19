/*
- 응모자 수를 입력 받음
- 랜덤 함수를 통해서 당첨자를 생성해 당첨자 발표 하기
*/

function go() {
  const n = document.querySelector("#volunteer");
  const win = document.querySelector(`.win`);
  // input 태그 안에 있는 값을 가져오기 위해선 .value를 사용해야 한다.
  const num = Math.floor(Math.random() * Number(n.value)) + 1;
  win.innerHTML = num;
}
