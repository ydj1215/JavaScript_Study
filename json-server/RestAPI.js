fetch("http://localhost:3000/posts", {
  method: "POST", //HTTP 요청 방법
  body: JSON.stringify({
    // 전송할 데이터
    title: "리액트",
    author: "패이스북",
  }),
  headers: {
    //헤더 값 정의
    "content-type": "application/json; charset=UTF-8", //content-type 정의
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
