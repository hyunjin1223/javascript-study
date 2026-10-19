// 객체 메서드와 this
// - 메서드는 객체에 프로퍼티로 저장된 함수임
// - 일반 함수의 this는 함수를 어떻게 호출했는지에 따라 결정됨

const player = {
  name: "서준",
  level: 7,
  introduce() {
    return `${this.name} (레벨 ${this.level})`;
  }
};

console.log(player.introduce()); // 서준 (레벨 7)

const anotherPlayer = {
  name: "유나",
  level: 12,
  introduce: player.introduce
};

console.log(anotherPlayer.introduce()); // 유나 (레벨 12)
