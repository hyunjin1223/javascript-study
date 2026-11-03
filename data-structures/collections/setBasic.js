// Set 자료구조
// - 중복된 값을 허용하지 않음

const selectedIds = new Set([2, 4, 4, 6, 2]);
console.log(selectedIds.size); // 3
console.log([...selectedIds]); // [ 2, 4, 6 ]

selectedIds.add(8);
selectedIds.delete(4);
console.log(selectedIds.has(4)); // false

// Set을 이용해 배열의 중복값 제거
const tags = ["js", "web", "js", "study", "web"];
const uniqueTags = [...new Set(tags)];
console.log(uniqueTags); // [ 'js', 'web', 'study' ]

for (const id of selectedIds) {
  console.log(id); // 2, 6, 8 순서로 출력
}