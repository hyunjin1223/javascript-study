// 화살표 함수
// - 짧은 함수 표현에 적합함
// - 중괄호를 사용하면 값을 반환할 때 return이 필요함
// - 객체 리터럴을 바로 반환할 때는 소괄호로 감싸야 함

const double = number => number * 2;

const getGrade = score => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  return "C";
};

const createUser = (name, level) => ({ name, level });

console.log(double(7)); // 14
console.log(getGrade(86)); // B
console.log(createUser("지우", 2)); // { name: '지우', level: 2 }