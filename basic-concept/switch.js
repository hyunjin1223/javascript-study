// switch는 하나의 값을 여러 경우와 비교할 때 사용할 수 있다.
const plan = "standard";

switch (plan) {
  case "basic":
    console.log("기본 요금제");
    break;
  case "standard":
    console.log("일반 요금제"); // 일반 요금제
    break;
  case "premium":
    console.log("프리미엄 요금제");
    break;
  default:
    console.log("알 수 없는 요금제");
}

// break가 없으면 다음 case의 코드까지 실행될 수 있으므로 의도적으로 생략할 때만 사용한다.