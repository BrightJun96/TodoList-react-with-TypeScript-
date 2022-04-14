import * as React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styled from "styled-components";
import oc from "open-color";
export interface ITodoContainerProps {}

const StyledOuterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerContainter = styled.div`
  width: 500px;
  min-height: 500px;
  background-color: ${oc.gray[1]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  text-align: center;
`;

const StyledHeader = styled.div`
  width: 100%;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  background-color: ${oc.indigo[3]};
`;

export interface TodoType {
  id: string;
  text: string;
  done: boolean;
}

export type TodoArrayType = Array<TodoType>;
export default function TodoContainer(props: ITodoContainerProps) {
  const [todos, setTodos] = React.useState<TodoArrayType>([
    {
      id: "a",
      text: "react",
      done: false,
    },
    {
      id: "b",
      text: "typescript",
      done: false,
    },
  ]);

  return (
    <StyledOuterContainer>
      <StyledInnerContainter>
        <StyledHeader>
          <h1>To Do List</h1>
          <h3>React With TypeScript</h3>
          <TodoInput todos={todos} setTodos={setTodos} />
        </StyledHeader>

        <TodoList todos={todos} setTodos={setTodos} />
      </StyledInnerContainter>
    </StyledOuterContainer>
  );
}
