// 나머지 매개변수와 전개 구문
// - ...매개변수는 전달된 나머지 인수를 배열로 모음
// - ...배열은 배열의 요소를 개별 인수나 새 배열 요소로 펼침

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

const weekendPlans = ["영화 보기", "기타 연습"];
const extraPlans = ["산책"];
const allPlans = [...weekendPlans, ...extraPlans];
const scores = [81, 94, 77];

console.log(sum(10, 20, 30)); // 60
console.log(Math.max(...scores)); // 94
console.log(allPlans); // [ '영화 보기', '기타 연습', '산책' ]
