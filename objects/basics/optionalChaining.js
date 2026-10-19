// 옵셔널 체이닝 (?.)
// - 중간 값이 null 또는 undefined일 수 있을 때 안전하게 프로퍼티에 접근함

const profile = {
  name: "하린",
  contact: {
    email: "harin@example.com"
  }
};

console.log(profile.contact?.email); // harin@example.com
console.log(profile.address?.city); // undefined

const members = [{ name: "하린" }];
console.log(members[0]?.name); // 하린
console.log(members[1]?.name); // undefined

// 값이 없을 수 있는 프로퍼티에 접근할 때만 사용하고,
// 존재해야 하는 값의 오류를 무조건 숨기는 용도로 남용하지 않음
