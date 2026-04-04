// ==============================
// 숫자(Number) 타입
// ==============================

// 자바스크립트는 모든 숫자를 "Number 타입(실수)"으로 처리한다.
// → 정수 / 실수 구분 없음 (전부 Number)
// → 내부적으로 64비트 부동소수점 사용

var integer = 10;     // 정수
var double = 10.12;   // 실수
var negative = -20;   // 음수
// 전부 같은 Number 타입


// ==============================
// 진법 표현
// ==============================

// 숫자는 다양한 진법으로 표현 가능
var binary = 0b01000001;  // 2진수
var octal = 0o101;        // 8진수
var hex = 0x41;           // 16진수

// 표기법만 다르고 값은 모두 동일
console.log(binary);  // 65
console.log(octal);   // 65
console.log(hex);     // 65

console.log(binary === octal);  // true
console.log(octal === hex);     // true


// ==============================
// 실수 처리 특징
// ==============================

// 정수처럼 보여도 실제로는 모두 실수
console.log(1 === 1.0);  // true

// 나눗셈 결과도 실수 가능
console.log(4 / 2);  // 2
console.log(3 / 2);  // 1.5


// ==============================
// 특수 숫자 값
// ==============================

// Infinity: 양의 무한대
// -Infinity: 음의 무한대
// NaN: Not-a-Number (연산 불가)

console.log(10 / 0);       // Infinity
console.log(10 / -0);      // -Infinity
console.log(1 * 'text');   // NaN

// 대소문자 구분 주의
var x = NaN;   // 정상
// var x = nan; // X ReferenceError