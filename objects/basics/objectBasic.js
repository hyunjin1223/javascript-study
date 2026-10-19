// 객체 생성과 프로퍼티 접근
// - 객체는 관련된 값들을 이름(key)으로 묶어 관리할 때 사용함

const member = {
  name: "현진",
  age: 20,
  "favorite-language": "JavaScript"
};

console.log(member.name); // 현진
console.log(member["favorite-language"]); // JavaScript

member.city = "대구"; // 프로퍼티 추가
member.age = 21; // 프로퍼티 수정
console.log(member.city, member.age); // 대구 21

console.log("name" in member); // true
console.log("email" in member); // false