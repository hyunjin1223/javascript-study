// 배열 기본
// - 배열은 여러 값을 순서대로 저장하며 인덱스는 0부터 시작함
// - 배열 자체는 변경 가능한 객체임

const scores = [82, 95, 71];
console.log(scores[0]); // 82
console.log(scores.at(-1)); // 71 (마지막 요소)
console.log(scores.length); // 3

scores[1] = 98;
console.log(scores); // [ 82, 98, 71 ]

scores[3] = 88;
console.log(scores.length); // 4
console.log(scores); // [ 82, 98, 71, 88 ]

// 서로 다른 자료형도 넣을 수 있지만, 같은 종류의 값을 저장하면 다루기 쉬움
const profile = ["Mina", 20, true];
console.log(profile[0]); // Mina

// 다차원 배열은 배열 안에 배열을 저장함
const board = [
  ["A", "B"],
  ["C", "D"]
];
console.log(board[1][0]); // C