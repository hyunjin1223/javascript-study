// 논리 연산자는 조건을 조합하거나 기본값을 선택할 때 사용한다.
const hasAccount = true;
const isVerified = true;
console.log(hasAccount && isVerified); // true
console.log(hasAccount || false);      // true
console.log(!hasAccount);              // false

// ||는 왼쪽이 falsy일 때 오른쪽 값을 반환한다.
const savedName = "";
console.log(savedName || "Guest"); // Guest

// &&는 왼쪽이 truthy일 때 오른쪽 표현식을 평가한다.
const showNotice = true;
showNotice && console.log("새 알림이 있습니다."); // 새 알림이 있습니다.

// 0, "", null, undefined, NaN 등은 조건식에서 falsy로 평가된다.
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean("yes")); // true