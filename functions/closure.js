// 클로저
// - 내부 함수가 바깥 함수의 변수에 접근할 수 있는 성질
// - 바깥 함수가 끝난 뒤에도 내부 함수가 해당 변수를 기억할 수 있음

function createScoreTracker(initialScore = 0) {
  let score = initialScore; // 외부에서 직접 접근할 수 없는 지역 변수

  return {
    add(points) {
      score += points;
      return score;
    },
    getScore() {
      return score;
    }
  };
}

const tracker = createScoreTracker(10);

console.log(tracker.add(5)); // 15 // 15
console.log(tracker.add(8)); // 23 // 23
console.log(tracker.getScore()); // 23 // 23
console.log(tracker.score); // undefined // undefined (지역 변수에 직접 접근할 수 없음)
