// JSON 데이터를 동적으로 웹 페이지에 표시하는 간단한 방법

const jsonData =
  '[{"id": "user1", "password": "pass1", "name": "안유진", "phone": "010-1234-5678", "email": "user1@example.com"}, {"id": "user2", "password": "pass2", "name": "유나", "phone": "010-2345-6789", "email": "user2@example.com"}, {"id": "user3", "password": "pass3", "name": "이은지", "phone": "010-3456-7890", "email": "user3@example.com"}, {"id": "user4", "password": "pass4", "name": "카즈하", "phone": "010-4567-8901", "email": "user4@example.com"}, {"id": "user5", "password": "pass5", "name": "채원", "phone": "010-5678-9012", "email": "user5@example.com"}, {"id": "user6", "password": "pass6", "name": "은채", "phone": "010-6789-0123", "email": "user6@example.com"}, {"id": "user7", "password": "pass7", "name": "지수", "phone": "010-7890-1234", "email": "user7@example.com"}, {"id": "user8", "password": "pass8", "name": "아린", "phone": "010-8901-2345", "email": "user8@example.com"}, {"id": "user9", "password": "pass9", "name": "박준형", "phone": "010-9012-3456", "email": "user9@example.com"}, {"id": "user10", "password": "pass10", "name": "김지원", "phone": "010-0123-4567", "email": "user10@example.com"}]';

// JSON 데이터를 객체 리터럴로 변환\
// members 변수에는 사용자 데이터 객체가 포함된 배열이 저장
const members = JSON.parse(jsonData);

// HTML 테이블 생성
// html 변수는 템플릿 리터럴을 사용하여 동적으로 HTML 테이블을 생성
const html = `
  <table border="1" cellspacing="0" style="border-collapse: collapse;">
    <thead>
      <tr>
        <th>ID</th>
        <th>Password</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      ${members
        .map(
          (member) => `
        <tr>
          <td>${member.id}</td>
          <td>${member.password}</td>
          <td>${member.name}</td>
          <td>${member.phone}</td>
          <td>${member.email}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
`;
// members.map(~).join("~")은 배열 members를 순회하며 행을 생성하는데 사용
// 각 사용자 데이터 객체를 테이블 행으로 변환하고, join("~")을 사용하여 행을 문자열로 결합

// HTML 테이블 출력
// 데이터를 표로 변환해서 출력하는 것이 가능
document.body.innerHTML = html;
