import React, { useContext, useRef } from "react";
import { v4 as uuid4 } from "uuid";
import { StyledInputContainer } from "./styled/InputContainerStyling";
import TextContext, { Text } from "./context/TextContext";
import TodoContext from "./context/TodoContext";
import { TodoState } from "./types/@types";
export interface ITodoInputProps {}

export default function TodoInput(props: ITodoInputProps) {
  const { text, setText } = useContext(TextContext) as Text;

  const { todos, setTodos } = useContext(TodoContext) as TodoState;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (text === "") return;

    const uniqueId = uuid4();
    console.log(uniqueId);

    const newTodo = todos.concat({
      id: uniqueId,
      text: text,
      done: false,
    });

    setTodos(newTodo);
    setText("");

    inputRef.current?.focus();
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.target.value);

  return (
    <StyledInputContainer>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-text" />
        <input
          type="text"
          name="todo-text"
          value={text}
          onChange={onChange}
          placeholder="할 일을 입력하세요..."
          ref={inputRef}
        />

        <button>추가</button>
      </form>
    </StyledInputContainer>
  );
}
