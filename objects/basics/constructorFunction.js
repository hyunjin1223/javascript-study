// 생성자 함수와 new
// - 생성자 함수는 보통 대문자로 시작하는 이름을 사용함
// - new로 호출하면 새 객체가 만들어지고 this가 그 객체를 가리킴

function Book(title, pages) {
  this.title = title;
  this.pages = pages;
}

const firstBook = new Book("작은 습관", 180);
const secondBook = new Book("밤의 기록", 240);

console.log(firstBook.title); // 작은 습관
console.log(secondBook.pages); // 240
console.log(firstBook instanceof Book); // true