// String(), Number(), Boolean()으로 명시적으로 형 변환할 수 있다.
console.log(String(2026));       // "2026"
console.log(Number("42"));      // 42
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false

// Number() 변환 시 빈 문자열과 공백 문자열은 0이 된다.
console.log(Number(""));        // 0
console.log(Number("   "));     // 0
console.log(Number("42px"));    // NaN

// 문자열 "0"은 비어 있지 않은 문자열이므로 true이다.
console.log(Boolean("0"));      // true
console.log(Boolean(""));       // false

// 더하기 연산자는 문자열 연결로 동작할 수 있어 입력값을 숫자로 변환해야 한다.
const userInput = "12";
console.log(userInput + 3);            // 123 (문자열 연결)
console.log(Number(userInput) + 3);    // 15 (숫자 덧셈)