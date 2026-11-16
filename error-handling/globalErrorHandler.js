// 브라우저의 전역 에러 처리
// - window.onerror는 처리되지 않은 브라우저 스크립트 오류를 전달받음
// - 오류 기록이나 사용자 안내에 활용할 수 있지만, 오류가 난 코드를 복구하지는 못함
// - 이 파일은 globalErrorHandler.html에서 실행함

const errorLog = document.querySelector("#errorLog");
const errorButton = document.querySelector("#errorButton");

window.onerror = function (message, source, line, column, error) {
  const details = [
    `메시지: ${message}`,
    `위치: ${line}:${column}`,
    `파일: ${source}`,
    `종류: ${error?.name ?? "알 수 없음"}`
  ].join("\n");

  errorLog.textContent += `${details}\n\n`;
  console.error("전역 오류가 발생했습니다.", error);

  // false를 반환하면 브라우저의 기본 오류 출력도 유지됨
  return false;
};

errorButton.addEventListener("click", () => {
  // 버튼을 눌렀을 때 일부러 처리되지 않은 오류를 발생시킴
  // window.onerror가 오류 정보를 받아 화면과 콘솔에 기록함
  throw new Error("버튼 이벤트에서 발생한 테스트 오류");
});