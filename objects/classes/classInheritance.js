// 클래스 상속과 메서드 재정의
// - extends로 부모 클래스를 상속함
// - 자식 생성자에서 this를 사용하기 전에 super()를 호출해야 함

class Notification {
  constructor(message) {
    this.message = message;
  }

  send() {
    return `알림: ${this.message}`;
  }
}

class EmailNotification extends Notification {
  constructor(message, address) {
    super(message);
    this.address = address;
  }

  send() {
    return `${super.send()} (받는 사람: ${this.address})`;
  }
}

const notice = new EmailNotification("회의 시작", "user@example.com");
console.log(notice.send()); // 알림: 회의 시작 (받는 사람: user@example.com)
console.log(notice instanceof Notification); // true
