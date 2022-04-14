import React, { Dispatch, SetStateAction } from "react";
import TodoElement from "./TodoElement";

import { TodoArrayType } from "./TodoContainer";

import styled from "styled-components";

export interface IAppProps {
  todos: TodoArrayType;
  setTodos: Dispatch<SetStateAction<TodoArrayType>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
}

const StyledList = styled.div`
  min-height: 300px;
  width: 100%;
`;

export default function TodoList({
  todos,
  setTodos,
  text,
  setText,
  edit,
  setEdit,
}: IAppProps) {
  return (
    <StyledList>
      {todos &&
        todos.map((todo) => (
          <TodoElement
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={text}
            setText={setText}
            edit={edit}
            setEdit={setEdit}
          />
        ))}
    </StyledList>
  );
}
