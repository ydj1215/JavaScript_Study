list = [];

function add() {
  // 입력창에서 데이터 가져오기
  const topic = document.querySelector(".input");

  // 생성
  const result = document.createElement("div");
  document.body.appendChild(result);
  result.setAttribute("class", "result");
  result.innerHTML = topic.value;
  result.setAttribute("onclick", "remove()");

  // 시간 정보 추가
  const date = new Date();
  const nowTime = date.getTime();
  const time = document.createElement("span");
  //   time.setAttribute("class", "none");
  time.innerHTML = nowTime;
  result.appendChild(time);

  // resultBox에 result를 추가
  const resultBox = document.querySelector(".result_box");
  resultBox.appendChild(result);

  // resultBox 안에 있는 모든 div 요소를 선택하고 배열에 저장
  const divElements = Array.from(resultBox.querySelectorAll("div"));

  // 정렬
  divElements.sort(function (a, b) {
    // 시간 정보(span)를 비교하여 정렬
    const timeA = parseInt(a.querySelector("span").innerHTML);
    const timeB = parseInt(b.querySelector("span").innerHTML);
    return timeB - timeA;
  });

  // div 요소들을 resultBox에 추가 (정렬된 순서대로)
  divElements.forEach(function (divElement) {
    resultBox.appendChild(divElement);
  });

  // 시간 정보는 보이지 않게 설정
  time.setAttribute("class", "none");
}

// 삭제
function remove() {
  // 클릭된 div요소를 탐생
  /*
    event: 이벤트 객체를 나타내는 변수명으로 이벤트 핸들러 함수 내에서 사용된다. 클릭, 마우스 이동, 키 입력 등의 이벤트와 관련된 정보를 담고 있다.
  */
  const clickedDiv = event.target;

  // 부모 요소(resultBox)에서 클릭된 div 요소를 삭제
  const resultBox = document.querySelector(".result_box");
  resultBox.removeChild(clickedDiv);
}

// Enter눌러도 버튼이 작동하게
function pressEnter(event) {
  if (event.key === "Enter") {
    document.getElementById("submitButton").click();
  }
}
