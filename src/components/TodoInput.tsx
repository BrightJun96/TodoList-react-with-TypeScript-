import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import { TodoArrayType } from "./TodoContainer";
import oc from "open-color";
import { v4 as uuid4 } from "uuid";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  width: 100%;

  form {
    display: flex;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
    line-height: 1.3rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    padding-left: 1rem;
  }

  button {
    border: none;
    outline: none;
    font-size: 1.3rem;
    height: 100%;
    padding: 1rem;

    background: ${oc.gray[4]};

    cursor: pointer;
    &:hover {
      background: ${oc.gray[5]};
    }
  }
`;

export interface ITodoInputProps {
  todos: TodoArrayType;
  setTodos: Dispatch<SetStateAction<TodoArrayType>>;
}

export default function TodoInput({ todos, setTodos }: ITodoInputProps) {
  const [todoText, setTodoText] = useState<string>("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (todoText === "") return;

    const uniqueId = uuid4();
    console.log(uniqueId);

    const newTodo = todos.concat({
      id: uniqueId,
      text: todoText,
      done: false,
    });

    setTodos(newTodo);
    setTodoText("");
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTodoText(e.target.value);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledInputContainer>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-text" />
        <input
          type="text"
          name="todo-text"
          value={todoText}
          onChange={onChange}
          placeholder="할 일을 입력하세요..."
          ref={inputRef}
        />
        <button>추가</button>
      </form>
    </StyledInputContainer>
  );
}
