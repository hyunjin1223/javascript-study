// 원시값의 메서드
// - 문자열과 숫자는 원시값이지만 메서드를 호출할 수 있음
// - 원시값 자체가 객체로 바뀌어 저장되는 것은 아님

const title = "javascript study";
console.log(title.toUpperCase()); // JAVASCRIPT STUDY
console.log(title); // javascript study (원래 문자열은 변경되지 않음)

const price = 1299.5;
console.log(price.toFixed(1)); // 1299.5 (소수점 자릿수에 맞춘 문자열 반환)
console.log(typeof price.toFixed(1)); // string