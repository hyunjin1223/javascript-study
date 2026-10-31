// 배열 정렬과 순서 변경
// - sort()는 원본 배열을 변경함
// - 숫자 정렬에는 비교 함수를 지정하는 것이 안전함

const names = ["Sora", "Mina", "Yuna"];
console.log(names.sort()); // [ 'Mina', 'Sora', 'Yuna' ]

const values = [40, 8, 100, 23];
values.sort((a, b) => a - b);
console.log(values); // [ 8, 23, 40, 100 ]

values.reverse();
console.log(values); // [ 100, 40, 23, 8 ]

const products = [
  { name: "Pen", price: 500 },
  { name: "Book", price: 2500 },
  { name: "Ruler", price: 800 }
];
products.sort((a, b) => a.price - b.price);
console.log(products.map((product) => product.name)); // [ 'Pen', 'Ruler', 'Book' ]

// 원본을 유지하며 정렬하려면 복사본에 sort()를 적용함
const original = [9, 2, 6];
const sorted = [...original].sort((a, b) => a - b);
console.log(sorted); // [ 2, 6, 9 ]
console.log(original); // [ 9, 2, 6 ]