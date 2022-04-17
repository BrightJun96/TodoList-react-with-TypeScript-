import React, { useContext, useState } from "react";
import TodoElement from "./TodoElement";
import styled from "styled-components";
import TodoContext from "./context/TodoContext";
import { TodoState } from "./types/@types";
export interface ITodoListProps {}

const StyledList = styled.div`
  min-height: 300px;
  width: 100%;
`;

export default function TodoList(props: ITodoListProps) {
  const { todos, setTodos } = useContext(TodoContext) as TodoState;

  const [filter, setFilter] = useState<string>("");

  const onChangeValue: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilter(e.target.value);

  // todo.text중에 value인값이 포함된것만 필터링한다.

  // 방법1. todo.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  // 방법2. todo.text.toLowerCase().includes(filter.toLowerCase())
  return (
    <StyledList>
      <label htmlFor="filter">
        Filter
        <input value={filter} onChange={onChangeValue} name="filter" />
      </label>
      {todos &&
        todos
          .filter(
            (todo) =>
              todo.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1
          )
          .map((todo) => (
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
