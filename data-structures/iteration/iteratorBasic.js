// 이터레이터 직접 사용하기
// - Symbol.iterator가 반환한 이터레이터는 next()로 값을 하나씩 제공함

const days = ["Mon", "Tue"];
const iterator = days[Symbol.iterator]();

console.log(iterator.next()); // { value: 'Mon', done: false }
console.log(iterator.next()); // { value: 'Tue', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 직접 만든 이터러블: 순서대로 두 개의 코드 이름을 제공함
const codes = {
  values: ["A1", "B2"],
  [Symbol.iterator]() {
    let index = 0;
    const items = this.values;

    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

console.log([...codes]); // [ 'A1', 'B2' ]