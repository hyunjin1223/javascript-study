// 정적 프로퍼티와 정적 메서드
// - static 멤버는 인스턴스가 아니라 클래스 자체에 속함

class Ticket {
  static nextNumber = 1;

  constructor(eventName) {
    this.number = Ticket.nextNumber++;
    this.eventName = eventName;
  }

  static isValidNumber(value) {
    return Number.isInteger(value) && value > 0;
  }
}

const first = new Ticket("전시회");
const second = new Ticket("공연");

console.log(first.number, second.number); // 1 2
console.log(Ticket.isValidNumber(2)); // true
console.log(first.isValidNumber); // undefined (정적 메서드는 인스턴스에 없음)