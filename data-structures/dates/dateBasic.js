// Date 객체와 날짜
// - 월은 0부터 시작하므로 0은 1월, 11은 12월임

const eventDate = new Date(2026, 9, 28, 14, 30); // 2026년 10월 28일 14:30 (현지 시간)
console.log(eventDate.getFullYear()); // 2026
console.log(eventDate.getMonth()); // 9
console.log(eventDate.getDate()); // 28
console.log(eventDate.getHours()); // 14

// Date는 날짜 문자열로 만들 수도 있음
const fixedDate = new Date("2025-03-15T10:00:00Z");
console.log(fixedDate.toISOString()); // 2025-03-15T10:00:00.000Z

// 두 날짜의 차이는 밀리초 단위로 계산됨
const start = new Date("2025-01-01T00:00:00Z");
const end = new Date("2025-01-03T00:00:00Z");
const daysBetween = (end - start) / (1000 * 60 * 60 * 24);
console.log(daysBetween); // 2

console.log(Number.isFinite(Date.now())); // true
