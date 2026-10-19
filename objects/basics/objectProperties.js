// 객체 프로퍼티 추가, 수정, 삭제
// - 점 표기법은 이름을 미리 알고 있을 때 사용하기 편리함
// - 대괄호 표기법은 변수에 들어 있는 키를 사용할 때 유용함

const score = {
  math: 85,
  english: 92
};

const subject = "science";
score[subject] = 88; // 변수에 담긴 키로 프로퍼티 추가
score.math = 90;
delete score.english;

console.log(score); // { math: 90, science: 88 }
console.log(Object.keys(score)); // [ 'math', 'science' ]
console.log(Object.values(score)); // [ 90, 88 ]
console.log(Object.entries(score)); // [ [ 'math', 90 ], [ 'science', 88 ] ]