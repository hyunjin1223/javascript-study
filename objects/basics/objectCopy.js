// 객체 복사와 참조
// - 객체를 다른 변수에 대입하면 객체 자체가 아니라 참조가 복사됨
// - 전개 구문으로 복사하면 얕은 복사가 되어 중첩 객체는 공유될 수 있음

const original = {
  name: "노트북",
  options: { color: "silver" }
};

const reference = original;
reference.name = "태블릿";
console.log(original.name); // 태블릿 (같은 객체를 가리킴)

const shallowCopy = { ...original };
shallowCopy.name = "모니터";
shallowCopy.options.color = "black";
console.log(original.name); // 태블릿 (최상위 프로퍼티는 별개)
console.log(original.options.color); // black (중첩 객체는 공유)

const deepCopy = structuredClone(original);
deepCopy.options.color = "white";
console.log(original.options.color); // black
console.log(deepCopy.options.color); // white