// WeakMap과 WeakSet
// - 객체를 키 또는 값으로 추적할 때 사용함
// - 일반 Map/Set과 달리 반복하거나 size를 조회할 수 없음

const user = { id: 101, name: "Mina" };
const privateNotes = new WeakMap();
privateNotes.set(user, "이 객체에 연결된 추가 정보");
console.log(privateNotes.get(user)); // 이 객체에 연결된 추가 정보

const activeUsers = new WeakSet();
activeUsers.add(user);
console.log(activeUsers.has(user)); // true

// WeakMap/WeakSet은 객체를 약하게 참조하므로 객체가 다른 곳에서 더 이상 사용되지 않으면
// 가비지 컬렉션 대상이 될 수 있음. 실제 수거 시점은 코드로 직접 확인할 수 없음.