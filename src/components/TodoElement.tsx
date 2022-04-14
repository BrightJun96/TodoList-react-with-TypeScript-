import React, { Dispatch, SetStateAction, useRef } from "react";
import { TodoType } from "./TodoContainer";
import { TodoArrayType } from "./TodoContainer";
import styled, { css } from "styled-components";
import oc from "open-color";

const StyledElement = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  h1 {
    flex: 1;
    text-align: left;
    padding-left: 1rem;
  }

  border-bottom: 1px solid ${oc.gray[6]};
`;

const StyledButtonBox = styled.div`
  display: flex;
  height: 100%;
  padding-right: 1rem;

  button {
    font-size: 1rem;
    background: ${oc.gray[5]};
    border: none;
    outline: none;
    padding: 0.5rem;
    border: 1px solid black;
    cursor: pointer;
    &:hover {
      background: ${oc.gray[3]};
    }
  }
`;

export interface ITodoElementProps {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodoArrayType>>;
  todos: TodoArrayType;
}

export default function TodoElement({
  todo,
  setTodos,
  todos,
}: ITodoElementProps) {
  // changeDone
  const onChangeDone: React.MouseEventHandler<HTMLButtonElement> = () => {
    const changeDoneTodo = { ...todo, done: !todo.done };

    const changeDoneTodos = todos.map((each) =>
      each.id === todo.id ? changeDoneTodo : each
    );

    setTodos(changeDoneTodos);

    console.log(todo.done);
  };

  // filterTodo
  const onFilterTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    const filterTodos = todos.filter((each) => each.id !== todo.id);

    setTodos(filterTodos);
  };

  // editTodo

  const onEditTodo: React.MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <StyledElement>
      {todo.done ? (
        <h1
          style={{
            textDecoration: "line-through",
          }}
        >
          {todo.text}
        </h1>
      ) : (
        <h1>{todo.text}</h1>
      )}
      {todo.done ? (
        <StyledButtonBox>
          <button onClick={onFilterTodo}>삭제</button>
        </StyledButtonBox>
      ) : (
        <StyledButtonBox>
          <button onClick={onChangeDone}>완료</button>
          <button onClick={onEditTodo}>수정</button>
        </StyledButtonBox>
      )}
    </StyledElement>
  );
}
