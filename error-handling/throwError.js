// throw로 직접 에러 발생시키기
// - throw 뒤에는 에러 객체를 전달하는 것이 일반적임
// - Error와 TypeError, RangeError 등 상황에 맞는 에러 클래스를 사용할 수 있음

function calculateAverage(scores) {
  if (!Array.isArray(scores)) {
    throw new TypeError("점수는 배열로 전달해야 합니다.");
  }

  if (scores.length === 0) {
    throw new RangeError("점수가 비어 있습니다.");
  }

  for (const score of scores) {
    if (typeof score !== "number" || !Number.isFinite(score)) {
      throw new TypeError("점수는 유효한 숫자여야 합니다.");
    }

    if (score < 0 || score > 100) {
      throw new RangeError("점수는 0점부터 100점까지 입력해야 합니다.");
    }
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

try {
  console.log(calculateAverage([80, 90, 100])); // 90
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  calculateAverage([]); // 점수가 없으므로 RangeError 발생
} catch (error) {
  console.log(error.name); // RangeError
  console.log(error.message); // 점수가 비어 있습니다.
}

try {
  calculateAverage([80, "90", 100]); // 문자열이 포함되어 TypeError 발생
} catch (error) {
  console.log(error.name); // TypeError
  console.log(error.message); // 점수는 유효한 숫자여야 합니다.
}
