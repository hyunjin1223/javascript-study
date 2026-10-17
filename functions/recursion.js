// 재귀 함수
// - 함수가 자기 자신을 호출하는 방식
// - 종료 조건이 없으면 호출이 끝나지 않아 오류가 발생할 수 있음

function factorial(number) {
  if (number <= 1) return 1; // 종료 조건
  return number * factorial(number - 1);
}

function sumTo(number) {
  if (number <= 0) return 0; // 종료 조건
  return number + sumTo(number - 1);
}

console.log(factorial(5)); // 120
console.log(sumTo(4)); // 10 (4 + 3 + 2 + 1)
