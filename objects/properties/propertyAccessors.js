// getter와 setter
// - getter는 프로퍼티를 읽을 때 실행되고, setter는 값을 대입할 때 실행됨
// - 값을 검증하거나 내부 표현을 숨길 때 활용할 수 있음

const order = {
  _quantity: 1,
  get quantity() {
    return this._quantity;
  },
  set quantity(value) {
    if (Number.isInteger(value) && value >= 1) {
      this._quantity = value;
    }
  }
};

order.quantity = 3;
console.log(order.quantity); // 3

order.quantity = 0; // 조건에 맞지 않아 값이 변경되지 않음
console.log(order.quantity); // 3