// 숫자와 숫자 관련 메서드
// - 숫자 리터럴은 여러 진법으로 표현할 수 있음
// - 숫자 변환, 반올림, 유효하지 않은 숫자 확인 등에 사용함

console.log(0b1010); // 10 (2진수)
console.log(0x2A); // 42 (16진수)
console.log((31).toString(2)); // 11111

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log((2.71828).toFixed(2)); // 2.72 (문자열 반환)

console.log(Number.isNaN(Number("hello"))); // true
console.log(Number.isFinite(100)); // true
console.log(parseInt("24px", 10)); // 24
console.log(parseFloat("3.75em")); // 3.75
console.log(Math.max(8, 15, 3)); // 15
console.log(Math.trunc(-4.8)); // -4 (소수 부분 제거)

// 부동소수점은 이진수로 정확하게 표현되지 않을 수 있음
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // 0.30