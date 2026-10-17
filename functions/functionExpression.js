// 함수 표현식
// - 함수를 변수에 할당해 사용할 수 있음
// - 변수에 함수가 할당된 뒤 호출할 수 있음

const getDiscountPrice = function (price, discountRate) {
  return price * (1 - discountRate);
};

const formatPrice = function (price) {
  return `${price.toLocaleString("ko-KR")}원`;
};

const discountedPrice = getDiscountPrice(20000, 0.15);

console.log(formatPrice(discountedPrice)); // 17,000원
console.log(typeof getDiscountPrice); // function