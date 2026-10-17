// this와 함수 바인딩
// - 일반 함수의 this는 함수가 어떻게 호출됐는지에 따라 달라짐
// - call과 apply는 호출 시 this와 인수를 지정함
// - bind는 this와 일부 인수를 고정한 새 함수를 반환함
// - 화살표 함수는 자신만의 this를 만들지 않고 바깥쪽 this를 사용함

function introduce(greeting, punctuation) {
  return `${greeting}, 저는 ${this.name}${punctuation}`;
}

const member = { name: "민지" };
const teammate = { name: "준호" };

console.log(introduce.call(member, "안녕하세요", "!"));
// 안녕하세요, 저는 민지!
console.log(introduce.apply(teammate, ["반갑습니다", "."]));
// 반갑습니다, 저는 준호.

const greetMember = introduce.bind(member, "좋은 아침입니다");
console.log(greetMember("!")); // 좋은 아침입니다, 저는 민지!

const team = {
  name: "개발팀",
  getLabel() {
    const makeLabel = () => `${this.name}입니다.`;
    return makeLabel();
  }
};

console.log(team.getLabel()); // 개발팀입니다. (화살표 함수가 바깥 this를 사용)
