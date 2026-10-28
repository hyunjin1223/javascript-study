// 문자열과 문자열 메서드
// - 문자열은 불변(immutable)이므로 메서드를 호출해도 원본은 바뀌지 않음

const message = "  Learn JavaScript  ";
console.log(message.length); // 20
console.log(message.trim()); // "Learn JavaScript"
console.log(message.toLowerCase()); // "  learn javascript  "
console.log(message.includes("Java")); // true
console.log(message.startsWith("  Learn")); // true
console.log(message.slice(2, 7)); // "Learn"
console.log(message); // 원본 문자열은 그대로 유지됨

const language = "JavaScript";
console.log(language[0]); // J
console.log(language.at(-1)); // t
console.log(language.indexOf("Script")); // 4
console.log(language.replace("Java", "Type")); // TypeScript

// split()은 문자열을 배열로 나눔
const tags = "html,css,javascript";
console.log(tags.split(",")); // [ 'html', 'css', 'javascript' ]

// 유니코드 코드 포인트가 필요한 경우 codePointAt()을 사용할 수 있음
console.log("A".codePointAt(0)); // 65