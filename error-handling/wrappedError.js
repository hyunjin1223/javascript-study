// 예외 감싸기 (wrapping exception)
// - 여러 종류의 내부 에러를 하나의 상위 에러로 묶어 전달하는 방식
// - 원래 에러는 cause에 보관해 필요할 때 원인을 확인할 수 있음

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = new.target.name;
  }
}

class UserLoadError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = new.target.name;
    this.cause = cause; // 실제로 발생한 원본 에러
  }
}

function readUser(json) {
  try {
    const user = JSON.parse(json);

    if (!user.id) {
      throw new ValidationError("사용자 ID가 없습니다.");
    }

    if (!user.name) {
      throw new ValidationError("사용자 이름이 없습니다.");
    }

    return user;
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof ValidationError) {
      // 호출하는 쪽에서는 UserLoadError 하나만 확인하면 됨
      throw new UserLoadError("사용자 정보를 읽지 못했습니다.", error);
    }

    // 예상하지 못한 종류의 오류는 그대로 전달함
    throw error;
  }
}

const jsonSamples = [
  '{"id": 1, "name": "서연"}',
  '{"name": "민준"}',
  '{ 잘못된 JSON }'
];

for (const json of jsonSamples) {
  try {
    const user = readUser(json);
    console.log(user); // { id: 1, name: '서연' }
  } catch (error) {
    if (error instanceof UserLoadError) {
      console.log(error.name); // UserLoadError
      console.log(error.message); // 사용자 정보를 읽지 못했습니다.
      console.log(error.cause.name); // ValidationError 또는 SyntaxError
      console.log(error.cause.message); // 실제 오류가 발생한 원인
    } else {
      throw error;
    }
  }
}