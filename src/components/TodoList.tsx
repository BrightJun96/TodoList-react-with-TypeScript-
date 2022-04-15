import React, { useContext } from "react";
import TodoElement from "./TodoElement";
import styled from "styled-components";
import TodoContext from "./context/TodoContext";
import { TodoState } from "./types/@types";
export interface IAppProps {}

const StyledList = styled.div`
  min-height: 300px;
  width: 100%;
`;

export default function TodoList(props: IAppProps) {
  const { todos, setTodos } = useContext(TodoContext) as TodoState;

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
