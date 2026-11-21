// Promise 기본
// - 비동기 작업의 성공 또는 실패 결과를 나타내는 객체
// - 생성 직후 executor 함수가 바로 실행됨
// - resolve(value): 작업 성공, reject(error): 작업 실패
// - Promise 상태는 pending에서 fulfilled 또는 rejected로 한 번만 변경됨

const completedTask = new Promise((resolve, reject) => {
  console.log("executor 실행");

  setTimeout(() => {
    resolve("파일 저장 완료");

    // 이미 resolve가 호출된 뒤라서 아래 reject는 무시됨
    reject(new Error("이 오류는 Promise 결과에 반영되지 않음"));
  }, 300);
});

console.log("Promise 생성 직후");

completedTask
  .then(result => {
    console.log(result); // 파일 저장 완료
  })
  .catch(error => {
    console.log(error.message);
  });

// 실패하는 Promise
const failedTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("파일 저장에 실패했습니다."));
  }, 150);
});

failedTask.catch(error => {
  console.log(error.message); // 파일 저장에 실패했습니다.
});

// 실행 순서:
// executor 실행
// Promise 생성 직후
// 파일 저장에 실패했습니다.
// 파일 저장 완료