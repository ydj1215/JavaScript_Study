let s = 0;
// s-- 에서 여러번 틀렸을때에 대한 처리가 필요
// 전역변수를 숫자가 아니라 boolen으로 처리하면 해결 가능할 듯

function check(num) {
  if (s < 0) {
    s = 0;
  }

  if (num === 1) {
    // 아이디 : 대문자, 소문자, 숫자 조합 8자 이상, 20자리 이하
    const idInput = document.querySelector(".id");
    const id = idInput.value;
    const checkBox = document.querySelector(".check_box.id");

    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

    if (regexPattern.test(id)) {
      checkBox.innerHTML = "유효한 아이디입니다.";
      s++;
    } else {
      checkBox.innerHTML =
        "유효하지 않은 아이디입니다.<br/>아이디는 대문자, 소문자, 숫자 조합으로 8자 이상,<br/>20자 이하이어야 합니다.";
      s--;
    }
  }

  if (num === 2) {
    // 패스워드 : 대문자, 소문자, 특수문자, 숫자 포함 8~20자리
    const pwInput = document.querySelector(".pw");
    const pw = pwInput.value;
    const checkBox = document.querySelector(".check_box.pw");

    const regexPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    if (regexPattern.test(pw)) {
      checkBox.innerHTML = "유효한 비빌번호입니다.";
      s++;
    } else {
      checkBox.innerHTML =
        "유효하지 않은 비밀번호입니다.<br/>비밀번호의 형식은 대문자, 소문자, 특수문자, 숫자 포함 8~20자리여야 합니다.";
      s--;
    }
  }

  if (num === 3) {
    // 이메일 : 일반적인 규칙
    const emInput = document.querySelector(".em");
    const em = emInput.value;
    const checkBox = document.querySelector(".check_box.em");

    const regexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regexPattern.test(em)) {
      checkBox.innerHTML = "유효한 이메일 주소입니다.";
      s++;
    } else {
      checkBox.innerHTML = "유효하지 않은 이메일 주소 형식입니다.";
      s--;
    }
  }

  if (num === 4) {
    // 전화번호 : 일반적인 규칙
    const phInput = document.querySelector(".ph");
    const ph = phInput.value;
    const checkBox = document.querySelector(".check_box.ph");

    // 정규 표현식 패턴
    const regexPattern = /^\d{3}-\d{3,4}-\d{3,4}$/;

    if (regexPattern.test(ph)) {
      checkBox.innerHTML = "유효한 전화번호입니다.";
      s++;
    } else {
      checkBox.innerHTML =
        "유효하지 않은 전화번호입니다.<br/>전화번호는 01X-1234-5678 형식이어야 합니다.";
      s--;
    }
  }

  console.log(s);

  if (s >= 4) {
    const submitButton = document.querySelector(".submit_check");
    submitButton.style.display = "block";
  }
}
