// 오류 우선 콜백(error-first callback)
// - Node.js에서 자주 사용하는 콜백 전달 방식
// - 첫 번째 인수는 오류, 두 번째 인수부터는 작업 결과를 전달함
// - 성공하면 callback(null, result), 실패하면 callback(error) 형태로 호출

function findBook(bookId, callback) {
  setTimeout(() => {
    const books = {
      101: { title: "바다의 지도", author: "김하늘" },
      102: { title: "작은 정원", author: "이서윤" }
    };

    const book = books[bookId];

    if (!book) {
      callback(new Error("해당 도서를 찾을 수 없습니다."));
      return;
    }

    callback(null, book);
  }, 200);
}

// 성공한 경우
findBook(101, (error, book) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(`제목: ${book.title}`);
  console.log(`저자: ${book.author}`);
});

// 실패한 경우
findBook(999, (error, book) => {
  if (error) {
    console.log(error.message); // 해당 도서를 찾을 수 없습니다.
    return;
  }

  console.log(book);
});

// 성공한 콜백은 null을 첫 번째 인수로 전달하고,
// 실패한 콜백은 Error 객체를 첫 번째 인수로 전달함