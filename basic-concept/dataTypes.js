// JavaScript의 기본 자료형과 typeof 결과를 확인한다.
const userName = "Mina";         // string
const userAge = 19;              // number
const isStudent = true;          // boolean
const unknownValue = undefined;  // undefined
const emptyValue = null;         // 의도적으로 값이 없음을 나타냄
const largeNumber = 123n;        // bigint
const uniqueId = Symbol("id");   // symbol

console.log(typeof userName);      // string
console.log(typeof userAge);       // number
console.log(typeof isStudent);     // boolean
console.log(typeof unknownValue);  // undefined
console.log(typeof largeNumber);   // bigint
console.log(typeof uniqueId);      // symbol

// typeof null이 "object"를 반환하는 것은 JavaScript의 오래된 동작이다.
console.log(typeof emptyValue); // object

// 배열도 typeof만으로는 일반 객체와 구분되지 않으므로 Array.isArray를 사용한다.
const scores = [80, 95, 72];
console.log(typeof scores);       // object
console.log(Array.isArray(scores)); // true