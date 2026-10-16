"use strict";

// 엄격 모드는 실수를 조기에 발견하도록 일부 오래된 동작을 제한한다.
const score = 90;
console.log(score); // 90

// 엄격 모드에서는 선언하지 않은 변수에 값을 대입하면 오류가 발생한다.
// totalScore = 100; // ReferenceError: totalScore is not defined

// "use strict"는 스크립트의 최상단에 작성해야 적용된다.