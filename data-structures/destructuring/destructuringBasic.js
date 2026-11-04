// 구조 분해 할당
// - 배열이나 객체의 값을 변수로 꺼내 간결하게 사용할 수 있음

const rgb = [30, 120, 220];
const [red, green, blue] = rgb;
console.log(red, green, blue); // 30 120 220

const [first, , third] = ["a", "b", "c"];
console.log(first, third); // a c

const [main, ...others] = ["home", "profile", "settings"];
console.log(main); // home
console.log(others); // [ 'profile', 'settings' ]

const [host = "localhost", port = 3000] = ["127.0.0.1"];
console.log(host, port); // 127.0.0.1 3000

const account = { username: "haru", level: 3 };
const { username, level: userLevel, role = "member" } = account;
console.log(username, userLevel, role); // haru 3 member

const { coordinates: [x, y] } = { coordinates: [12, 8] };
console.log(x, y); // 12 8

// 함수 매개변수에서 객체 구조 분해를 사용하면 필요한 값만 받을 수 있음
function showProfile({ username, level }) {
  console.log(`${username}: level ${level}`);
}
showProfile(account); // haru: level 3
