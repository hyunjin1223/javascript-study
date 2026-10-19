// 메서드 체이닝
// - 메서드에서 this를 반환하면 같은 객체의 메서드를 연속해서 호출할 수 있음

const order = {
  total: 0,
  addPrice(price) {
    this.total += price;
    return this;
  },
  applyDiscount(amount) {
    this.total -= amount;
    return this;
  },
  getTotal() {
    return this.total;
  }
};

const total = order
  .addPrice(12000)
  .addPrice(8000)
  .applyDiscount(3000)
  .getTotal();

console.log(total); // 17000
