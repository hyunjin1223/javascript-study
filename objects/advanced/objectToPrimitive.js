// 객체를 원시값으로 변환하기
// - 문자열, 숫자 변환 등에서 객체가 어떤 값을 반환할지 지정할 수 있음
// - Symbol.toPrimitive의 hint는 string, number, default 중 하나임

const product = {
  name: "머그컵",
  price: 12000,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.name;
    }
    return this.price;
  }
};

console.log(String(product)); // 머그컵
console.log(Number(product)); // 12000
console.log(product + 3000); // 15000