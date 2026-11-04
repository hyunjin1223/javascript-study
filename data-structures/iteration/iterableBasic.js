// 이터러블과 Array.from()
// - 이터러블은 for...of로 순회할 수 있는 객체임
// - 배열과 문자열은 대표적인 이터러블임

for (const letter of "JS") {
  console.log(letter); // J, S
}

const menu = ["rice", "soup", "salad"];
for (const item of menu) {
  console.log(item); // 배열 요소를 순서대로 출력
}

// Array.from()은 이터러블이나 유사 배열 객체를 배열로 변환함
const letters = Array.from("CODE");
console.log(letters); // [ 'C', 'O', 'D', 'E' ]

const arrayLike = { 0: "red", 1: "blue", length: 2 };
console.log(Array.from(arrayLike)); // [ 'red', 'blue' ]