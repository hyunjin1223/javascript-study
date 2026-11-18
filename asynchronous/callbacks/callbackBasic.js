// 비동기 콜백
// - 비동기 작업이 끝난 뒤 실행할 함수를 미리 전달하는 방식
// - 작업이 끝나기 전에 다음 코드가 먼저 실행될 수 있음

function loadProfile(userId, callback) {
  console.log("프로필을 불러오는 중...");

  // 실제 비동기 작업을 간단히 setTimeout으로 표현
  setTimeout(() => {
    const profile = {
      id: userId,
      nickname: "Hyunjin"
    };

    callback(profile);
  }, 300);
}

console.log("프로필 요청 시작");

loadProfile(12, profile => {
  console.log(`사용자 이름: ${profile.nickname}`);
  console.log(`사용자 번호: ${profile.id}`);
});

console.log("프로필 응답을 기다리지 않고 다음 코드 실행");

// 출력 순서:
// 프로필 요청 시작
// 프로필을 불러오는 중...
// 프로필 응답을 기다리지 않고 다음 코드 실행
// 사용자 이름: Hyunjin
// 사용자 번호: 12