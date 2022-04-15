- 할일을 입력할 인풋하나

- 할일목록

- 관리해야할 상태값 > input text / done

## 작업순서 및 할 것들

- 기본적 스타일링

- TODOinput에서 입력한 상태값을 TodoList에서 사용한다.

- TodoElement에서도 Todocontainer에 있는 setTodos를 써야함.
  때문에 props로 전달해줘야한다.

- TodoInput이 비어있으면 추가가 되지않게 해야함.

- 할 일 수정

#### Done

- TodoElement의 버튼을 누르면 done이 true가 되게 해야함.

  1. setTodos에 해당 todo만 변경되게 해야함.
  2. 불변성 유지를 위해 기존 todos의 내부요소들을 꺼내와야야함
  3. 바뀌는 todo만 바꿔주면됨.
  4. map을 사용해 id를 비교해 해당 객체에 done요소바꿈

#### filter

- TodoElement의 삭제 버튼을 누르면 필터링

  1. array.prototype.filter메서드 사용
     **타입스크립트 팁**

- props를 넘겨주기 위해서는 props를 사용하는 컴포넌트에서 props interface에서 선언해줘야함

- setState를 props로 넘겨주기 위해서 사용하는 컴포넌트에 함수를 무엇이라고 해줘야할까?

#### styling

- styled-component사용
  - 타입스크립트 적용해서 사용하는 법 숙지

#### TodoElement 수정

#### setState props로 넘기기

Dispatch와 setStateAction이라는 타입을 지정해사용하면 된다.

```js
import * as React from "react";
import { TodoArrayType } from "./TodoContainer";

export interface ITodoInputProps {
  todos: TodoArrayType | null;
  setTodos: React.Dispatch<React.SetStateAction<TodoArrayType | null>>;
}
```

**Ref**

- https://jemerald.tistory.com/127

## Todo

1. 전체적인 스타일링 > clear

- 전체적인 폰트 바꾸기

- ToDoInputDesign

2. TodoInput과 Header같이 > clear

3. TodoList Header에 붙게하기 > clear

4. input 비어있으면 추가 안되게 하기 > clear

- 함수를 끝내게 하는 법 | `return`

```js
if (todoText === "") return; // 함수를 끝낸다.
```

5. 수정하기

TodoElement에서 수정버튼을 누르면 **todo.text**가 TodoInput의 value값으로 설정되야함.

## 알아야할 것

- typescript usage with styled-components

- useRef usage with typescript
