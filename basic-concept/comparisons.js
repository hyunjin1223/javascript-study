// 비교 연산의 결과는 boolean이다.
console.log(7 > 4);    // true
console.log(7 <= 7);   // true
console.log(5 === 5);  // true
console.log(5 !== 3);  // true

// ==는 형 변환 후 비교할 수 있어, 일반적으로 ===를 우선 사용한다.
console.log("5" == 5);  // true
console.log("5" === 5); // false

// 문자열은 유니코드 순서에 따라 비교된다.
console.log("apple" < "banana"); // true

// NaN은 자기 자신과 비교해도 같지 않다.
console.log(NaN === NaN);          // false
console.log(Number.isNaN(NaN));    // true

// null과 undefined는 동등 비교에서 주의가 필요하다.
console.log(null == undefined);  // true
console.log(null === undefined); // false