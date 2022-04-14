import React, { Dispatch, SetStateAction } from "react";
import TodoElement from "./TodoElement";

import { TodoArrayType } from "./TodoContainer";

import styled from "styled-components";

const StyledList = styled.div`
  min-height: 300px;
  width: 100%;
`;

export interface IAppProps {
  todos: TodoArrayType;
  setTodos: Dispatch<SetStateAction<TodoArrayType>>;
}

export default function TodoList({ todos, setTodos }: IAppProps) {
  return (
    <StyledList>
      {todos &&
        todos.map((todo) => (
          <TodoElement
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
    </StyledList>
  );
}
