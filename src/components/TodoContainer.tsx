import * as React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import {
  StyledHeader,
  StyledInnerContainter,
  StyledOuterContainer,
} from "./styled/ContainerStyling";
export interface ITodoContainerProps {}

export default function TodoContainer(props: ITodoContainerProps) {
  return (
    <StyledOuterContainer>
      <StyledInnerContainter>
        <StyledHeader>
          <h1>To Do List</h1>
          <h3>React With TypeScript</h3>
          <TodoInput />
        </StyledHeader>

        <TodoList />
      </StyledInnerContainter>
    </StyledOuterContainer>
  );
}
