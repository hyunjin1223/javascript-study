// for문은 반복 횟수를 알고 있을 때 사용하기 편하다.
for (let i = 1; i <= 3; i++) {
  console.log(i); 
}
// 출력:
// 1
// 2
// 3

// while문은 조건이 true인 동안 반복한다.
let remaining = 3;
while (remaining > 0) {
  console.log(`남은 횟수: ${remaining}`);
  remaining--;
}
// 남은 횟수: 3
// 남은 횟수: 2
// 남은 횟수: 1

// do...while문은 조건을 검사하기 전에 본문을 한 번 실행한다.
let attempt = 0;
do {
  attempt++;
} while (attempt < 1);
console.log(attempt); // 1

// continue는 이번 반복을 건너뛰고 다음 반복으로 이동한다.
for (let number = 1; number <= 5; number++) {
  if (number === 3) continue;
  if (number === 5) break;

  console.log(number);
}
// 출력: 1, 2, 4