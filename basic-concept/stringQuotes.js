// 문자열은 작은따옴표, 큰따옴표, 백틱으로 작성할 수 있다.
const singleQuoted = 'hello';
const doubleQuoted = "JavaScript";

console.log(singleQuoted); // hello
console.log(doubleQuoted); // JavaScript

// 백틱을 사용하면 문자열 안에 변수 값을 넣을 수 있다.
const language = "JavaScript";
const message = `I am learning ${language}.`;
console.log(message); // I am learning JavaScript.

// 백틱 문자열은 여러 줄로 작성할 수도 있다.
const note = `첫 번째 줄
두 번째 줄`;
console.log(note);
// 첫 번째 줄
// 두 번째 줄