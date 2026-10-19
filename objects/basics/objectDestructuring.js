// 객체 구조 분해 할당
// - 객체의 프로퍼티를 변수로 꺼내 간결하게 사용할 수 있음

const course = {
  title: "JavaScript 기초",
  duration: 12,
  instructor: { name: "민서" }
};

const { title, duration: hours, level = "입문" } = course;
console.log(title); // JavaScript 기초
console.log(hours); // 12 (duration 값을 hours라는 변수명으로 받음)
console.log(level); // 입문 (기본값)

const { instructor: { name } } = course;
console.log(name); // 민서

const { title: courseTitle, ...otherInfo } = course;
console.log(courseTitle); // JavaScript 기초
console.log(otherInfo.duration); // 12
