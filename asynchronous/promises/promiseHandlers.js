// Promise 소비 메서드
// - then(): 이행된 결과를 처리
// - catch(): 거부된 이유를 처리
// - finally(): 성공과 실패에 관계없이 마무리 작업 수행
// - finally()는 기본적으로 원래 결과나 오류를 다음 핸들러에 전달함

function checkDelivery(orderNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderNumber > 0) {
        resolve({ orderNumber, status: "배송 준비 중" });
      } else {
        reject(new Error("올바르지 않은 주문 번호입니다."));
      }
    }, 200);
  });
}

checkDelivery(305)
  .then(order => {
    console.log(`${order.orderNumber}번 주문: ${order.status}`);
    return order;
  })
  .finally(() => {
    console.log("배송 조회 작업 종료");
  })
  .then(order => {
    // finally()에서 원래 이행 결과가 사라지지 않음
    console.log(`확인한 주문 번호: ${order.orderNumber}`);
  });

checkDelivery(0)
  .then(order => {
    console.log(order);
  })
  .catch(error => {
    console.log(error.message); // 올바르지 않은 주문 번호입니다.
  })
  .finally(() => {
    console.log("실패한 배송 조회 작업 종료");
  });

// 각 Promise 체인은 독립적으로 처리됨.
// finally()는 결과를 바꾸지 않는 정리 작업에 사용하는 것이 좋음.