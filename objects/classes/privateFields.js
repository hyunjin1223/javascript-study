// private 필드와 캡슐화
// - #으로 시작하는 필드는 클래스 외부에서 직접 접근할 수 없음
// - _로 시작하는 이름은 비공개를 표현하는 관례일 뿐 접근을 막지는 않음

class Wallet {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
    this._label = "개인 지갑"; // 보호 기능이 있는 것은 아님
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  get balance() {
    return this.#balance;
  }
}

const wallet = new Wallet("수현");
wallet.deposit(15000);
console.log(wallet.balance); // 15000
console.log(wallet._label); // 개인 지갑
// wallet.#balance처럼 클래스 외부에서 직접 접근하면 문법 오류가 발생함