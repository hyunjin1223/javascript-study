# Data Structures

JavaScript의 숫자와 문자열부터 배열, 컬렉션, 반복 가능한 객체까지 자료형과 자료구조 관련 내용을 정리하는 폴더입니다.

## 폴더 구성

### `basics`

| 파일 | 내용 |
|---|---|
| `primitiveMethods.js` | 원시값에서 메서드를 사용하는 방식 |
| `numberMethods.js` | 숫자 표현, 변환, 반올림, 유효한 숫자 확인 |
| `stringMethods.js` | 문자열의 불변성과 주요 문자열 메서드 |

### `arrays`

| 파일 | 내용 |
|---|---|
| `arrayBasic.js` | 배열 생성, 인덱스, 길이, 다차원 배열 |
| `arrayModify.js` | 배열 요소 추가·제거, `splice()`, `slice()`, `concat()`, `join()` |
| `arraySearch.js` | `includes()`, `find()`, `filter()`, `some()`, `every()` 등 검색 메서드 |
| `arrayTransform.js` | `map()`, `filter()`, `flatMap()`, `flat()`을 이용한 배열 변형 |
| `arraySort.js` | `sort()`, `reverse()`와 배열 정렬 |
| `arrayReduce.js` | `reduce()`와 `reduceRight()`를 이용한 값 누적 |

### `collections`

| 파일 | 내용 |
|---|---|
| `mapBasic.js` | 키와 값으로 구성되는 `Map` |
| `setBasic.js` | 중복을 허용하지 않는 `Set` |
| `weakCollections.js` | 객체를 약하게 참조하는 `WeakMap`과 `WeakSet` |
| `objectEntries.js` | `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.fromEntries()` |

### `iteration`

| 파일 | 내용 |
|---|---|
| `iterableBasic.js` | 이터러블, `for...of`, `Array.from()` |
| `iteratorBasic.js` | `Symbol.iterator`와 `next()`를 이용한 이터레이터 구현 |

### `destructuring`

| 파일 | 내용 |
|---|---|
| `destructuringBasic.js` | 배열·객체 구조 분해, 기본값, 나머지 요소, 함수 매개변수 구조 분해 |

### `dates`

| 파일 | 내용 |
|---|---|
| `dateBasic.js` | `Date` 객체 생성, 날짜 정보 조회, 날짜 간 차이 계산 |

### `serialization`

| 파일 | 내용 |
|---|---|
| `jsonBasic.js` | `JSON.stringify()`와 `JSON.parse()`를 이용한 JSON 변환 |

## 실행 방법

저장소 최상위 폴더에서 실행할 파일을 지정합니다.

```bash
node data-structures/arrays/arrayBasic.js
```

실행할 파일의 경로를 바꾸면 다른 예제도 같은 방식으로 실행할 수 있습니다. 각 예제는 독립적으로 실행할 수 있으며, 핵심 개념과 실행 결과는 코드 주석을 참고하세요.
