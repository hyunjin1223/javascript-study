// instanceof로 인스턴스 확인하기
// - 객체의 프로토타입 체인에 특정 생성자의 prototype이 있는지 확인함

class Content {}
class Video extends Content {}

const video = new Video();

console.log(video instanceof Video); // true
console.log(video instanceof Content); // true
console.log(video instanceof Object); // true
console.log([] instanceof Array); // true
console.log(Array.isArray([])); // true (배열 확인에는 이 방법이 더 명확함)
