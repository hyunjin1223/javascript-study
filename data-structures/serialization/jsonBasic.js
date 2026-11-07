// JSON 직렬화와 파싱
// - JSON.stringify()는 JavaScript 값을 JSON 문자열로 변환함
// - JSON.parse()는 JSON 문자열을 JavaScript 값으로 변환함

const report = {
  title: "Study report",
  completed: 4,
  internalNote: "local only"
};

const jsonText = JSON.stringify(report, null, 2);
console.log(jsonText); // 들여쓰기된 JSON 문자열

const restored = JSON.parse(jsonText);
console.log(restored.title); // Study report

// replacer 배열로 직렬화할 프로퍼티를 제한할 수 있음
console.log(JSON.stringify(report, ["title", "completed"]));
// {"title":"Study report","completed":4}

// reviver를 이용해 특정 값을 변환하며 파싱할 수 있음
const parsed = JSON.parse('{"points":"42"}', (key, value) => {
  if (key === "points") return Number(value);
  return value;
});
console.log(parsed.points + 8); // 50

// JSON.stringify()는 함수, undefined 등 일부 값을 생략하거나 변환함
console.log(JSON.stringify({ name: "Mina", extra: undefined })); // {"name":"Mina"}
