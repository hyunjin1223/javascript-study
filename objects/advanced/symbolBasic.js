// Symbol을 프로퍼티 키로 사용하기
// - Symbol()은 서로 다른 고유한 값을 만듦
// - Symbol 키는 일반적인 Object.keys() 결과에 포함되지 않음

const internalId = Symbol("id");
const product = {
  name: "키보드",
  [internalId]: 204
};

console.log(product.name); // 키보드
console.log(product[internalId]); // 204
console.log(Object.keys(product)); // [ 'name' ]
console.log(Object.getOwnPropertySymbols(product).length); // 1
console.log(Reflect.ownKeys(product)); // [ 'name', Symbol(id) ]