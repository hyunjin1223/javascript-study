// ================================
// 변수 이름 작성 원칙
// ================================
    
// 의미를 명확히 표현 (가독성 중요)
var x = 3;        // X 의미 불명확
var score = 100;  // OK 점수

// 예: 경과 시간 (일 단위)
var d;                    // X
var elapsedTimeInDays;    // OK


// ================================
// 변수 네이밍 규칙 (Naming Rules)
// ================================

// - 영어 사용
// - 문자 + 숫자 가능
// - _, $ 사용 가능
// - 숫자로 시작 X
// - 키워드 사용 X

var user1;   // OK
var _name;   // OK
var $price;  // OK
//var 1user; // X
//var var;   // X


// ================================
// 네이밍 컨벤션 (Naming Conventions)
// ================================

// camelCase
var firstName;
// snake_case
var first_name;
// PascalCase
var FirstName;
// Hungarian Case
var strFirstName;
// 특수 네이밍
var $elem = document.getElementById('myId');   // DOM 요소
var observable$ = fromEvent(document, 'click'); // RxJS