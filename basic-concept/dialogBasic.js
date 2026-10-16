// 이 파일은 브라우저에서 실행해야 한다. Node.js에는 alert/prompt/confirm이 없다.
alert("예제 실행을 시작합니다.");

const inputName = prompt("이름을 입력하세요:", "Hyunjin");

if (inputName === null) {
  console.log("이름 입력을 취소했습니다."); // 취소 버튼을 누른 경우
} else {
  const wantsGreeting = confirm(`${inputName}님에게 인사를 할까요?`);

  if (wantsGreeting) {
    alert(`안녕하세요, ${inputName}님!`);
  } else {
    console.log("인사를 건너뛰었습니다.");
  }
}