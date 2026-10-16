// let은 다시 대입할 수 있고, const는 다른 값으로 다시 대입할 수 없다.
let currentLevel = 1;
currentLevel = 2;
console.log(currentLevel); // 2

const userName = "Mina";
console.log(userName); // Mina
// userName = "Jin"; // TypeError: const 변수에는 다시 대입할 수 없다.

// 변수명은 대소문자를 구분하며, 보통 camelCase로 작성한다.
const maxRetries = 3;
const MAX_CONNECTIONS = 5; // 실행 중 바뀌지 않는 고정값은 대문자 상수로 표기하기도 한다.
console.log(maxRetries, MAX_CONNECTIONS); // 3 5

// const는 객체 내부의 값까지 고정하는 것은 아니다.
const settings = { theme: "light" };
settings.theme = "dark";
console.log(settings.theme); // dark