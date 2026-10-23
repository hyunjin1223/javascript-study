// 내장 객체의 프로토타입
// - 배열이나 문자열은 프로토타입을 통해 여러 공통 메서드를 제공받음
// - 내장 객체의 프로토타입을 직접 수정하는 것은 일반적으로 피하는 편이 좋음

const numbers = [4, 7, 9];

console.log(numbers.map(number => number * 2)); // [ 8, 14, 18 ]
console.log(Object.getPrototypeOf(numbers) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true
console.log(Object.hasOwn(numbers, "map")); // false (Array.prototype에서 찾음)
