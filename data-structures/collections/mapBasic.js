// Map 자료구조
// - 키와 값을 쌍으로 저장하며, 키에는 객체를 포함한 다양한 값을 사용할 수 있음

const visits = new Map();
visits.set("home", 4);
visits.set("search", 7);
visits.set(404, "not found");

console.log(visits.get("search")); // 7
console.log(visits.has("home")); // true
console.log(visits.size); // 3

visits.set("home", 5); // 기존 키의 값 갱신
console.log(visits.get("home")); // 5

for (const [page, count] of visits) {
  console.log(page, count); // 삽입 순서대로 키와 값을 출력
}

const settingsObject = { theme: "dark", fontSize: 16 };
const settingsMap = new Map(Object.entries(settingsObject));
console.log(settingsMap.get("theme")); // dark
console.log(Object.fromEntries(settingsMap)); // { theme: 'dark', fontSize: 16 }
