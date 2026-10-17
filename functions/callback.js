// 콜백 함수
// - 다른 함수에 인수로 전달해 필요한 시점에 실행하는 함수
// - 콜백은 동기 방식과 비동기 방식 모두에서 사용할 수 있음

function processOrder(orderNumber, onComplete) {
  console.log(`주문 번호 ${orderNumber} 처리 완료`);
  onComplete(orderNumber);
}

function showReceipt(orderNumber) {
  console.log(`${orderNumber} 영수증을 준비했습니다.`);
}

processOrder("A-102", showReceipt);
// 출력:
// 주문 번호 A-102 처리 완료
// A-102 영수증을 준비했습니다.

processOrder("B-205", orderNumber => {
  console.log(`${orderNumber}: 포장 완료`);
}); // B-205: 포장 완료
