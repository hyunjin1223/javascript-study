// 산술 연산자
console.log(8 + 3);  // 11
console.log(8 - 3);  // 5
console.log(8 * 3);  // 24
console.log(8 / 3);  // 2.666...
console.log(8 % 3);  // 2 (나머지)
console.log(2 ** 4); // 16 (거듭제곱)

// += 같은 복합 대입 연산자로 기존 값을 갱신할 수 있다.
let total = 10;
total += 5;
console.log(total); // 15

// 후위 증가 연산자는 현재 값을 먼저 사용한 뒤 1을 더한다.
let count = 4;
console.log(count++); // 4
console.log(count);   // 5

// 전위 증가 연산자는 먼저 1을 더한 뒤 그 값을 사용한다.
console.log(++count); // 6

// 단항 +는 숫자로 변환할 때도 사용할 수 있다.
console.log(+"25" + 5); // 30