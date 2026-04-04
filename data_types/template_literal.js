// ==============================
// 템플릿 리터럴 (Template Literal)
// ==============================

// - ES6부터 도입된 새로운 문자열 표기법
// - 작은따옴표('')나 큰따옴표("") 대신 백틱(``) 사용
// - 런타임에 일반 문자열로 변환되어 처리됨

var template = `Template literal`;
console.log(template); // Template literal


// ==============================
// 멀티라인 문자열
// ==============================

// 일반 문자열에서는 줄바꿈(개행) 허용 X
// var str = 'Hello
// world.'; // SyntaxError

// 일반 문자열에서 줄바꿈하려면 이스케이프 시퀀스(\n, \t 등) 사용
var templateEscape = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

// 템플릿 리터럴은 이스케이프 시퀀스 없이 줄바꿈, 공백 그대로 적용
var templateMultiLine = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;


// ==============================
// 표현식 삽입 (Expression Interpolation)
// ==============================

var first = 'Ung-mo';
var last = 'Lee';

// ES5: 문자열 연결 연산자(+) 사용
console.log('My name is ' + first + ' ' + last + '.');

// ES6: 템플릿 리터럴 - ${} 사용하여 변수/표현식 바로 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

// 표현식의 평가 결과가 문자열이 아니어도 문자열로 강제 변환됨
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 주의: 표현식 삽입은 반드시 템플릿 리터럴 안에서만 동작
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2} (일반 문자로 취급됨)