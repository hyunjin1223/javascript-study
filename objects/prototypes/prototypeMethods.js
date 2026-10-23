// 프로토타입을 다루는 메서드
// - 객체의 프로토타입을 확인하거나 새 객체에 프로토타입을 지정할 수 있음
// - __proto__ 대신 Object.getPrototypeOf(), Object.create() 등을 사용함

const baseSettings = {
  describe() {
    return `모드: ${this.mode}`;
  }
};

const userSettings = Object.create(baseSettings);
userSettings.mode = "light";

console.log(userSettings.describe()); // 모드: light
console.log(Object.getPrototypeOf(userSettings) === baseSettings); // true
console.log(Object.hasOwn(userSettings, "mode")); // true
console.log(Object.hasOwn(userSettings, "describe")); // false

// Object.setPrototypeOf()도 있지만 실행 중 프로토타입을 바꾸는 방식은
// 성능과 코드 이해 측면에서 남용하지 않는 것이 좋음
