// 객체와 메모리 관리
// - 객체를 가리키는 참조가 더 이상 없으면 가비지 컬렉션 대상이 될 수 있음
// - 실제 메모리 회수 시점은 JavaScript 엔진이 결정함

let account = {
  owner: "지우",
  balance: 50000
};

const savedAccount = account; // 아직 다른 참조가 존재함
account = null;

console.log(savedAccount.owner); // 지우
console.log(savedAccount.balance); // 50000

// WeakMap은 키로 사용한 객체를 강하게 붙잡아 두지 않음
// 단, 이 예제에서 가비지 컬렉션이 즉시 일어나는 것은 아님
let session = { id: "session-1" };
const sessionData = new WeakMap();
sessionData.set(session, { lastActive: "today" });
console.log(sessionData.get(session).lastActive); // today
session = null; // 다른 참조가 없다면 객체와 WeakMap 항목은 회수될 수 있음