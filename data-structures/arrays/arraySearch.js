// 배열에서 요소 찾기
// - includes/indexOf는 값의 존재나 위치를 확인함
// - find/findIndex는 조건에 맞는 첫 요소나 인덱스를 찾음

const temperatures = [18, 22, 27, 22, 15];
console.log(temperatures.includes(27)); // true
console.log(temperatures.indexOf(22)); // 1
console.log(temperatures.lastIndexOf(22)); // 3

const firstHotDay = temperatures.find((value) => value >= 25);
console.log(firstHotDay); // 27

const hotDayIndex = temperatures.findIndex((value) => value >= 25);
console.log(hotDayIndex); // 2

const coldDays = temperatures.filter((value) => value < 20);
console.log(coldDays); // [ 18, 15 ]

console.log(temperatures.some((value) => value >= 27)); // true (하나라도 만족)
console.log(temperatures.every((value) => value >= 10)); // true (모두 만족)