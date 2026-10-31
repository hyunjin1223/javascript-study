// 배열 변형 메서드
// - map()은 요소를 변환한 새 배열을 반환함
// - filter()는 조건에 맞는 요소만 모은 새 배열을 반환함

const prices = [1200, 2500, 800, 3100];
const discounted = prices.map((price) => Math.round(price * 0.9));
console.log(discounted); // [ 1080, 2250, 720, 2790 ]

const expensive = prices.filter((price) => price >= 2000);
console.log(expensive); // [ 2500, 3100 ]

const words = ["red blue", "green", "black white"];
const splitWords = words.flatMap((word) => word.split(" "));
console.log(splitWords); // [ 'red', 'blue', 'green', 'black', 'white' ]

const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat()); // [ 1, 2, 3, 4, [ 5 ] ]
console.log(nested.flat(2)); // [ 1, 2, 3, 4, 5 ]

console.log(prices); // map/filter는 원본 배열을 변경하지 않음