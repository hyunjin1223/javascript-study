// ??는 왼쪽 값이 null 또는 undefined일 때만 기본값을 사용한다.
const nickname = null;
const displayName = nickname ?? "Guest";
console.log(displayName); // Guest

// 0이나 빈 문자열은 null/undefined가 아니므로 그대로 유지된다.
const savedVolume = 0;
const volume = savedVolume ?? 50;
console.log(volume); // 0

// ||는 falsy 값을 모두 기본값으로 바꾸므로 ??와 결과가 다를 수 있다.
console.log(savedVolume || 50); // 50

const emptyLabel = "";
console.log(emptyLabel ?? "기본 라벨"); // ""
console.log(emptyLabel || "기본 라벨"); // 기본 라벨