// Object.keys(), Object.values(), Object.entries()
// - 일반 객체의 열거 가능한 자체 문자열 키를 배열로 가져옴

const product = { name: "Notebook", stock: 12, available: true };
console.log(Object.keys(product)); // [ 'name', 'stock', 'available' ]
console.log(Object.values(product)); // [ 'Notebook', 12, true ]
console.log(Object.entries(product)); // [ [ 'name', 'Notebook' ], [ 'stock', 12 ], [ 'available', true ] ]

// entries를 이용해 객체의 각 프로퍼티를 순회할 수 있음
for (const [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}

// 객체를 변환한 뒤 다시 객체로 만들 수도 있음
const doubledStock = Object.fromEntries(
  Object.entries(product).map(([key, value]) => [key, key === "stock" ? value * 2 : value])
);
console.log(doubledStock.stock); // 24
