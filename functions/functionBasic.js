// 함수 선언과 호출
// - 매개변수로 값을 받고 return으로 결과를 돌려줄 수 있음
// - 기본 매개변수는 인수가 생략되거나 undefined일 때 사용됨

function greet(name = "친구") {
  return `${name}님, 안녕하세요!`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(greet("민지")); // 민지님, 안녕하세요!
console.log(greet()); // 친구님, 안녕하세요!
console.log(calculateTotal(2500, 3)); // 7500