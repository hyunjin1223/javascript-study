// 믹스인
// - 상속 관계를 만들지 않고도 여러 객체의 기능을 클래스에 조합할 수 있음

const canTurnOn = {
  turnOn() {
    this.isOn = true;
    return `${this.name} 전원이 켜졌습니다.`;
  }
};

const canSetLabel = {
  setLabel(label) {
    this.label = label;
  }
};

class Device {
  constructor(name) {
    this.name = name;
    this.isOn = false;
  }
}

Object.assign(Device.prototype, canTurnOn, canSetLabel);

const speaker = new Device("스피커");
speaker.setLabel("거실");
console.log(speaker.turnOn()); // 스피커 전원이 켜졌습니다.
console.log(speaker.label); // 거실