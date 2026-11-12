// try...catch...finally
// - finally는 에러 발생 여부와 관계없이 마지막에 실행됨
// - try나 catch에서 return을 만나도 함수가 끝나기 전에 finally가 실행됨
// - 정리 작업이나 리소스 해제처럼 마지막에 반드시 실행할 코드에 사용함

function saveDocument(shouldFail) {
  try {
    console.log("문서 저장을 시작합니다.");

    if (shouldFail) {
      throw new Error("저장 공간이 부족합니다.");
    }

    return "저장 완료";
  } catch (error) {
    return `저장 실패: ${error.message}`;
  } finally {
    // try 또는 catch에서 return 하더라도 이 부분은 먼저 실행됨
    console.log("임시 작업 정보를 정리합니다.");
  }
}

console.log(saveDocument(false));
// 문서 저장을 시작합니다.
// 임시 작업 정보를 정리합니다.
// 저장 완료

console.log(saveDocument(true));
// 문서 저장을 시작합니다.
// 임시 작업 정보를 정리합니다.
// 저장 실패: 저장 공간이 부족합니다.

// catch 없이 try...finally를 사용할 수도 있음
// 이 경우 에러를 처리하지 않고 바깥쪽으로 전달하지만 finally는 실행됨
function runTask() {
  try {
    throw new Error("작업 중 문제가 발생했습니다.");
  } finally {
    console.log("작업 종료 절차를 실행합니다.");
  }
}

try {
  runTask();
} catch (error) {
  console.log(error.message); // 작업 중 문제가 발생했습니다.
}