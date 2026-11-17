# Error Handling

JavaScript에서 발생하는 런타임 오류를 처리하고, 필요한 경우 직접 오류를 만들거나 확장하는 방법을 정리합니다.

## Topics

| File | Topics |
|---|---|
| `tryCatch.js` | `try...catch`, 에러 객체, 선택적 `catch`, 동기 코드의 오류 처리 |
| `throwError.js` | `throw`, `Error`, `TypeError`, `RangeError` |
| `rethrowError.js` | 에러 종류 확인, 처리하지 않는 에러 다시 던지기 |
| `finally.js` | `finally`, `return`과 정리 작업, `try...finally` |
| `customError.js` | 사용자 정의 에러, `Error` 상속, 에러 계층과 `instanceof` |
| `wrappedError.js` | 예외 감싸기와 원본 에러 보관 |
| `globalErrorHandler.html` / `globalErrorHandler.js` | 브라우저의 `window.onerror`를 이용한 전역 오류 처리 |

## Run examples

저장소 최상위 폴더에서 Node.js 예제를 실행합니다. 예를 들어:

```bash
node error-handling/tryCatch.js
```

각 JavaScript 파일은 독립적으로 실행할 수 있습니다. 다른 예제를 실행할 때는 파일 경로를 바꾸면 됩니다.

`globalErrorHandler.html`과 `globalErrorHandler.js`는 브라우저 전용 예제입니다. `globalErrorHandler.html`을 브라우저에서 열고 **테스트 오류 발생** 버튼을 눌러 동작을 확인합니다.