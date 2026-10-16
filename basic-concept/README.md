# Basic Concept

JavaScript의 기본 문법과 실행 방식을 정리한 폴더입니다. 예제 코드는 학습용으로 직접 구성했으며, 실행 결과나 중요한 특징은 주석으로 표시했습니다.

## Files

| File | Topic | Run in |
|---|---|---|
| `helloWorld.html` / `helloWorld.js` | HTML 내부 스크립트와 외부 파일 연결 | Browser |
| `codeStructure.js` | 문장, 세미콜론, 주석, 코드 블록 | Node.js |
| `strictMode.js` | 엄격 모드 | Node.js |
| `variables.js` | `let`, `const`, 변수명 | Node.js |
| `dataTypes.js` | 기본 자료형과 `typeof` | Node.js |
| `stringQuotes.js` | 문자열 리터럴과 템플릿 문자열 | Node.js |
| `dialogBasic.html` / `dialogBasic.js` | `alert`, `prompt`, `confirm` | Browser |
| `typeConversion.js` | 문자열·숫자·불리언 형 변환 | Node.js |
| `operators.js` | 산술, 대입, 증감 연산자 | Node.js |
| `comparisons.js` | 비교 연산자와 값 비교 주의점 | Node.js |
| `conditions.js` | `if`, `else`, 삼항 연산자 | Node.js |
| `logicalOperators.js` | `&&`, `||`, `!`와 단락 평가 | Node.js |
| `nullishCoalescing.js` | `??`와 기본값 처리 | Node.js |
| `loops.js` | `for`, `while`, `do...while`, `break`, `continue` | Node.js |
| `switch.js` | `switch`와 `case` | Node.js |

## Run examples

저장소 최상위 폴더에서 Node.js 예제 하나를 실행합니다.

```bash
node basic-concept/variables.js
```

`helloWorld.html`과 `dialogBasic.html`은 브라우저에서 열어 실행합니다. 대화상자 예제는 `prompt()`와 `confirm()`을 사용하므로 실행 중 입력이나 확인을 요구합니다.