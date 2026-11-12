// 사용자 정의 에러와 에러 상속
// - Error를 상속하면 일반 에러와 같은 방식으로 다룰 수 있음
// - instanceof로 에러 종류와 상속 관계를 확인할 수 있음
// - new.target.name을 사용하면 실제 생성된 하위 클래스의 이름을 설정할 수 있음

class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = new.target.name;
  }
}

class ValidationError extends AppError {
  // 입력값 검증 과정에서 발생하는 에러
}

class RequiredFieldError extends ValidationError {
  constructor(field) {
    super(`${field} 항목은 필수입니다.`);
    this.field = field;
  }
}

function validateMember(member) {
  if (!member.email) {
    throw new RequiredFieldError("email");
  }

  if (typeof member.age !== "number") {
    throw new ValidationError("나이는 숫자로 입력해야 합니다.");
  }

  return member;
}

const members = [
  { name: "서연", email: "seoyeon@example.com", age: 22 },
  { name: "민준", email: "minjun@example.com", age: "20" },
  { name: "지우", age: 19 }
];

for (const member of members) {
  try {
    console.log(validateMember(member)); // 첫 번째 멤버만 정상적으로 반환됨
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.name); // ValidationError 또는 RequiredFieldError
      console.log(error.message); // 검증에 실패한 이유
      console.log(error instanceof AppError); // true

      if (error instanceof RequiredFieldError) {
        console.log(error.field); // email
      }
    } else {
      throw error;
    }
  }
}

// 내장 에러 클래스를 상속하는 것도 가능함
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = new.target.name;
  }
}

const formatError = new FormatError("파일 형식이 올바르지 않습니다.");

console.log(formatError.name); // FormatError
console.log(formatError.message); // 파일 형식이 올바르지 않습니다.
console.log(formatError instanceof SyntaxError); // true