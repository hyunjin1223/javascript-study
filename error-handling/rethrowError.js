// 에러 다시 던지기 (rethrowing)
// - catch에서는 처리 방법을 알고 있는 에러만 처리하는 것이 좋음
// - 처리할 수 없는 에러는 throw로 다시 전달해 바깥쪽에서 처리함

function readSettings(json, afterRead) {
  try {
    const settings = JSON.parse(json);

    if (!settings.host) {
      throw new TypeError("host 설정이 없습니다.");
    }

    // 외부 작업 중 예상하지 못한 에러가 발생할 수도 있음
    if (afterRead) {
      afterRead(settings);
    }

    return settings;
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError) {
      console.log(`설정 데이터 오류: ${error.message}`);
      return null;
    }

    // 이 함수에서 처리하지 않는 에러는 호출한 쪽으로 전달함
    throw error;
  }
}

const settings = readSettings('{"host": "localhost"}');
console.log(settings.host); // localhost

readSettings('{"host": }'); // 설정 데이터 오류: JSON 문법 오류 메시지

try {
  readSettings('{"host": "localhost"}', () => {
    throw new Error("후처리 작업에 실패했습니다.");
  });
} catch (error) {
  // readSettings가 다시 던진 에러를 바깥쪽에서 처리함
  console.log(`바깥쪽에서 처리: ${error.message}`);
  // 바깥쪽에서 처리: 후처리 작업에 실패했습니다.
}