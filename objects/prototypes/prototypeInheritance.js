// 프로토타입 상속
// - 객체에 없는 프로퍼티를 프로토타입에서 찾아볼 수 있음
// - Object.create()로 지정한 객체를 프로토타입으로 갖는 객체를 만들 수 있음

const vehicle = {
  move() {
    return `${this.name}이(가) 이동합니다.`;
  }
};

const bicycle = Object.create(vehicle);
bicycle.name = "자전거";

console.log(bicycle.move()); // 자전거이(가) 이동합니다.
console.log(Object.getPrototypeOf(bicycle) === vehicle); // true
console.log(Object.hasOwn(bicycle, "move")); // false (프로토타입에서 상속)
