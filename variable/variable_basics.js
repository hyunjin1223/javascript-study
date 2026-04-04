var score;      // 변수 선언
score = 80;     // 값의 할당
var score = 80;    // 변수 선언과 값의 할당


// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Lee' };
var users = [
    { id: 1, name: 'Lee'},
    { id: 2, name: 'Kim'}
];


// 변수 선언은 런타임 전에, 값 할당은 런타임에 실행된다.
console.log(score);  // underfined
var score;   // 변수 선언
score = 80;  // 값의 할당
console.log(score);  // 80


// 재할당: 이미 값이 할당되어 있는 변수에 새로운 값을 또다시
var score = 80;  // 변수 선언과 값의 할당
score = 90;      // 값의 재할당
// ES6에서 도입된 const키워드를 사용해 선언한 변수는 재할당이 금지된다.


// 변수 이름은 변수의 존재  목적을 쉽게 이해할 수 있도록 의미를 명확히 표현해야 한다. 
// 좋은 변수 이름은 가독성을 높인다.
var x = 3;          // NG. x 변수가 의미하는 바를 알 수 없다.
var score = 100;    // OK. score 변수는 점수를 의미한다.

// 예) 경과 시간. 단위는 날짜다.
var d;   // NG
var elapsedTimeInDays;   // OK


// 변수 네이밍 규칙(Naming rules)

// 카멜 케이스(camelCase)
var firstName;
// 스네이크 케이스(snake_case)
var first_name;
// 파스칼 케이스(PascalCase)
var FirsName;
// 헝가리언 케이스(typeHungarianCase)
var strFirstName;  // type + identifier
var $elem = document.getElementById('myId');  // DOM 노드
var observable$ = fromEvent(document, 'click');  // RxJS 옵저러블