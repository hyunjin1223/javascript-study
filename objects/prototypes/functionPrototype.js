// 생성자 함수의 prototype
// - 생성자 함수의 prototype 프로퍼티는 new로 만든 인스턴스의 프로토타입이 됨
// - 공통 메서드를 prototype에 두면 인스턴스마다 함수를 복사하지 않아도 됨

function Member(name) {
  this.name = name;
}

Member.prototype.introduce = function () {
  return `저는 ${this.name}입니다.`;
};

const first = new Member("도윤");
const second = new Member("서아");

console.log(first.introduce()); // 저는 도윤입니다.
console.log(second.introduce()); // 저는 서아입니다.
console.log(first.introduce === second.introduce); // true (같은 메서드 공유)
console.log(Object.hasOwn(first, "introduce")); // false
