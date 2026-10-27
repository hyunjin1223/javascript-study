# Objects

JavaScript 객체의 기본 동작부터 프로토타입과 클래스까지 정리하는 폴더입니다.

## 폴더 구성

### `basics`

| 파일 | 내용 |
|---|---|
| `objectBasic.js` | 객체 생성과 프로퍼티 접근 |
| `objectProperties.js` | 프로퍼티 추가·수정·삭제, 키와 값 조회 |
| `objectCopy.js` | 객체 참조, 얕은 복사와 깊은 복사 |
| `objectDestructuring.js` | 객체 구조 분해 할당 |
| `objectMethods.js` | 객체 메서드와 `this` |
| `methodChaining.js` | 메서드 체이닝 |
| `constructorFunction.js` | 생성자 함수와 `new` |
| `optionalChaining.js` | 옵셔널 체이닝 |

### `advanced`

| 파일 | 내용 |
|---|---|
| `symbolBasic.js` | Symbol 프로퍼티 |
| `objectToPrimitive.js` | 객체의 원시값 변환 |
| `garbageCollection.js` | 참조와 가비지 컬렉션 개념 |

### `properties`

| 파일 | 내용 |
|---|---|
| `propertyDescriptors.js` | 프로퍼티 디스크립터와 속성 플래그 |
| `propertyAccessors.js` | getter와 setter |

### `prototypes`

| 파일 | 내용 |
|---|---|
| `prototypeInheritance.js` | 프로토타입 상속 |
| `functionPrototype.js` | 생성자 함수의 `prototype` |
| `nativePrototypes.js` | 내장 객체의 프로토타입 |
| `prototypeMethods.js` | 프로토타입을 확인하고 다루는 메서드 |

### `classes`

| 파일 | 내용 |
|---|---|
| `classBasic.js` | 클래스 기본 문법 |
| `classInheritance.js` | 클래스 상속과 메서드 재정의 |
| `staticMembers.js` | 정적 프로퍼티와 메서드 |
| `privateFields.js` | private 필드와 캡슐화 |
| `extendingBuiltIns.js` | 내장 클래스 상속 |
| `instanceof.js` | 인스턴스 타입 확인 |
| `mixins.js` | 믹스인으로 기능 조합 |

## 실행 방법

저장소 최상위 폴더에서 실행할 파일을 지정합니다.

```bash
node objects/basics/objectBasic.js
```

실행할 파일의 경로를 바꾸면 다른 예제도 같은 방식으로 실행할 수 있습니다. 예제별 실행 결과와 핵심 개념은 코드 주석을 참고하세요.