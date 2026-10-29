// reduce()와 reduceRight()
// - 배열 요소를 순서대로 누적해 하나의 결과를 만들 때 사용함

const expenses = [1200, 850, 2400, 550];
const total = expenses.reduce((sum, expense) => sum + expense, 0);
console.log(total); // 5000

const maxExpense = expenses.reduce((max, expense) => Math.max(max, expense), 0);
console.log(maxExpense); // 2400

const letters = ["J", "S"];
console.log(letters.reduce((text, letter) => text + letter, "")); // JS
console.log(letters.reduceRight((text, letter) => text + letter, "")); // SJ

// 초기값을 지정하면 빈 배열에서도 동작을 예측하기 쉬움
console.log([].reduce((sum, value) => sum + value, 0)); // 0
