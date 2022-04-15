1.  함수를 끝내게 하는 법 | `return`

```js
if (todoText === "") return; // 함수를 끝낸다.
```

2. setState 넘겨주는 방법

```tsx
import React, { Dispatch, SetStateAction } from "react";

export interface ITodoInputProps {
  setTodos: Dispatch<SetStateAction<TodoArrayType>>;
}
```

3. props를 넘겨줄 때 해당 props에 대한 타입을 컴포넌트에 명시해줘야함.

```tsx
export interface ITodoElementProps {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodoArrayType>>;
  todos: TodoArrayType;
}
```

4. useState에 타입이 다른 것으로 변경될 것 같으면 유니온 타입으로 정의해줘야함.

```tsx

const [data,setData] = useState<null| string[]>

```

5. 이벤트 핸들러를 사용하기 위해서는 이벤트 핸들러 함수에 함수타입을 설정하거나  
   이벤트 객체에 타입을 설정해주어야한다.

- 이벤트 객체가 없다면 이벤트 핸들러에 타입을 지정해주자.

**이벤트 핸들러에 타입 설정**

```tsx
  const onChangeDone: React.MouseEventHandler<HTMLButtonElement> = () => {

      <button onClick = {onChangeDone}>}
```

**이벤트 객체에 타입 설정**

```tsx

const [text,setText] = useState<string>("")
const onChangeText = (e :  React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
};


<input onChange = {onChangeText} value = {text}>
```

6. 특정 라이브러리를 설치할 때 `@types/library` 도 같이 설치해줘야함

```
npm i styled-components

npm i @types/styled-components

```

7. styled-components에서 프롭스를 전달하여 사용하기 위해서는 props에 타입을 지정해줘야함.

```tsx
interface TextProps {
  complete: boolean;
}
const StyledText = styled.h1`
  flex: 1;
  text-align: left;
  padding-left: 1rem;

  ${(props: TextProps) =>
    props.complete &&
    css`
      text-decoration: line-through;
    `}
`;
```

8. useRef 사용하기
   - useRef type으로 참조하고 하는 리액트 요소의 타입을 가져온다.

- 해당 요소에 hover하면 어떤 요소인지 알려줌.

```tsx
const inputRef = useRef<HTMLInputElement | null>(null);
```

9. useContext로 context value값을 가져올 때 as로 타입도 같이 명시해줘야함.

**Context**

```tsx
import { createContext, Dispatch, SetStateAction } from "react";

export interface Text {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const TextContext = createContext<Text | null>(null);
export default TextContext;
```

**Consumber**

```tsx
const { text, setText } = useContext(TextContext) as Text;
```

as를 써는이유는?  
useContext가 반환하는 것은 타입이 객체일수도 있고 null일 수도 있는데 이 때  
null이라면 구조분해를 할 수 없기 때문에 강제적으로 Text라고 타입을 지정해주는 것이다.

**as**  
타입을 개발자가 명시적으로 지정해주는 키워드
