# JavaScript Study

JavaScript의 기본 문법부터 비동기 처리와 브라우저 API까지 학습한 내용을 정리하는 저장소입니다.

## Goals

- JavaScript의 핵심 개념을 이해하고 예제로 정리합니다.
- 개념별 코드를 직접 작성하고 실행하며 동작을 확인합니다.
- 학습한 내용을 연습 문제와 작은 프로젝트에 적용합니다.

## Topics

| Directory | Topics |
| --- | --- |
| `basic-concept` | JavaScript 기초, 변수와 자료형, 연산자, 제어문 |
| `functions` | 함수, 화살표 함수, 콜백, 클로저, `this` |
| `objects` | 객체, 프로토타입, 클래스, 상속 |
| `data-structures` | 문자열, 배열, `Map`, `Set`, 구조 분해 할당 |
| `error-handling` | 예외 처리와 사용자 정의 오류 |
| `asynchronous` | 타이머, Promise, `async` / `await` |
| `modules` | `import`, `export`, 모듈 구성 |
| `regular-expressions` | 정규표현식 |
| `browser/dom` | DOM 탐색과 조작 |
| `browser/events` | 이벤트 처리, 버블링, 이벤트 위임 |
| `browser/forms` | 폼 입력과 유효성 검사 |
| `browser/network` | Fetch API와 네트워크 요청 |
| `browser/storage` | 쿠키, Web Storage, IndexedDB |
| `browser/web-components` | Custom Elements, Shadow DOM |
| `practice` | 학습한 개념을 활용한 연습 문제 |
| `projects` | 여러 개념을 조합한 작은 프로젝트 |

> 위 목록은 학습 계획입니다. 각 디렉터리는 해당 내용을 공부하기 시작할 때 추가합니다.

## How to Run

실행 방법은 예제의 종류에 따라 다릅니다.

- **기본 문법 예제:** Node.js에서 실행할 수 있습니다.
  ```bash
  node path/to/example.js
  ```
- **브라우저 예제:** HTML 파일을 브라우저에서 열어 실행합니다. 예제에 따라 로컬 웹 서버가 필요할 수 있습니다.
- `import` / `export`를 사용하는 예제는 모듈 설정에 따라 실행 방법이 달라질 수 있습니다. 필요한 경우 해당 디렉터리에 실행 방법을 별도로 기록합니다.

## Reference

- [모던 JavaScript 튜토리얼](https://ko.javascript.info/)

이 저장소는 위 자료를 주요 참고 자료로 사용합니다. 예제는 학습 목적에 맞게 직접 작성하거나 수정해 정리하며, 원본 자료의 코드를 활용한 경우에는 출처와 라이선스를 확인합니다.

## Notes

- 디렉터리명은 `kebab-case`(예: `basic-concept`)로 작성하고, 파일명은 내용을 알아보기 쉽게 작성합니다.
- 일반 JavaScript 파일명은 `camelCase.js` 형식을 사용합니다.
- 브라우저 전용 기능을 사용하는 예제는 필요한 HTML 파일을 함께 둡니다.
- 학습 진도에 맞춰 디렉터리와 예제를 점진적으로 추가합니다.
