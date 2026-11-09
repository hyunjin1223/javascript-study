// try...catch와 에러 객체
// - try 안에서 런타임 에러가 발생하면 실행을 멈추고 catch로 이동함
// - 에러 객체의 name, message, stack으로 오류 정보를 확인할 수 있음
// - catch에서 에러 정보가 필요 없다면 매개변수를 생략할 수 있음

const validJson = '{"name": "현진", "age": 20}';

try {
  const member = JSON.parse(validJson);
  console.log(member.name); // 현진
  console.log(member.age); // 20
} catch (error) {
  console.log(error.name); // 에러 이름
  console.log(error.message); // 에러 메시지
  console.log(error.stack); // 에러가 발생한 호출 위치
}

const invalidJson = '{"name": }';

try {
  JSON.parse(invalidJson);
} catch (error) {
  console.log(error.name); // SyntaxError
  console.log(error.message); // JSON 형식이 잘못되었다는 설명
}

// 에러 객체를 사용하지 않을 때는 catch의 매개변수를 생략할 수 있음
try {
  JSON.parse("{ 잘못된 JSON }");
} catch {
  console.log("데이터 형식이 올바르지 않습니다."); // 데이터 형식이 올바르지 않습니다.
}

// try...catch는 동기 코드에 적용됨
// setTimeout 콜백은 나중에 실행되므로 콜백 내부에서 별도로 처리해야 함
setTimeout(() => {
  try {
    throw new Error("예약된 작업에서 발생한 오류");
  } catch (error) {
    console.log(error.message); // 예약된 작업에서 발생한 오류
  }
}, 0);