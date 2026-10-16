// if / else if / else로 조건에 따라 다른 코드를 실행한다.
const temperature = 27;

if (temperature >= 30) {
  console.log("더운 날씨입니다.");
} else if (temperature >= 20) {
  console.log("활동하기 좋은 날씨입니다."); // 활동하기 좋은 날씨입니다.
} else {
  console.log("조금 쌀쌀합니다.");
}

// 조건 연산자는 간단히 값을 선택할 때 사용할 수 있다.
const age = 20;
const accessMessage = age >= 18 ? "입장 가능" : "입장 불가";
console.log(accessMessage); // 입장 가능