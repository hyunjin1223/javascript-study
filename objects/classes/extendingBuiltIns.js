// 내장 클래스를 상속하기
// - Array 같은 내장 클래스를 상속해 별도 기능을 추가할 수 있음
// - 다만 특별한 이유가 없다면 상속보다 별도 객체로 감싸는 설계가 단순할 수 있음

class ScoreList extends Array {
  average() {
    if (this.length === 0) {
      return 0;
    }
    return this.reduce((sum, score) => sum + score, 0) / this.length;
  }
}

const scores = new ScoreList(80, 90, 100);
console.log(scores.average()); // 90
console.log(scores instanceof Array); // true
