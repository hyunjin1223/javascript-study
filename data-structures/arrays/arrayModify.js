// 배열 요소 추가와 제거
// - push/pop은 끝, unshift/shift는 앞에서 요소를 추가하거나 제거함
// - splice()는 기존 배열을 변경하고 slice()는 일부를 복사해 반환함

const queue = ["first", "second"];
queue.push("third");
console.log(queue); // [ 'first', 'second', 'third' ]
console.log(queue.pop()); // third
console.log(queue.shift()); // first
queue.unshift("new-first");
console.log(queue); // [ 'new-first', 'second' ]

const weekdays = ["Mon", "Tue", "Wed", "Thu"];
weekdays.splice(1, 2, "TUE", "WED");
console.log(weekdays); // [ 'Mon', 'TUE', 'WED', 'Thu' ]

const part = weekdays.slice(1, 3);
console.log(part); // [ 'TUE', 'WED' ]
console.log(weekdays); // 원본은 slice()로 바뀌지 않음

const combined = [1, 2].concat([3, 4]);
console.log(combined); // [ 1, 2, 3, 4 ]

// join()은 배열 요소를 문자열로 연결함
console.log(["2026", "10", "28"].join("-")); // 2026-10-28