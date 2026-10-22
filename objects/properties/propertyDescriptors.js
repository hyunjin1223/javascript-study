// 프로퍼티 디스크립터
// - writable, enumerable, configurable로 프로퍼티의 동작을 설정할 수 있음

const settings = {};

Object.defineProperty(settings, "theme", {
  value: "dark",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(settings.theme); // dark
console.log(Object.keys(settings)); // [ 'theme' ]
console.log(Object.getOwnPropertyDescriptor(settings, "theme"));
// { value: 'dark', writable: false, enumerable: true, configurable: false }

// writable이 false이므로 일반적인 대입으로 값을 변경할 수 없음
settings.theme = "light";
console.log(settings.theme); // dark