// 클래스 기본 문법
// - class는 객체를 만들기 위한 문법이며 constructor에서 초기값을 설정함
// - 클래스 메서드는 인스턴스마다 별도로 만들어지지 않고 프로토타입에 저장됨

class Recipe {
  constructor(name, minutes) {
    this.name = name;
    this.minutes = minutes;
  }

  summary() {
    return `${this.name}: ${this.minutes}분`;
  }
}

const recipe = new Recipe("토마토 파스타", 20);
console.log(recipe.summary()); // 토마토 파스타: 20분
console.log(recipe instanceof Recipe); // true
