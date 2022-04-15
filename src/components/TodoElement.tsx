import React, { Dispatch, SetStateAction, useContext } from "react";
import {
  StyledButtonBox,
  StyledElement,
  StyledText,
} from "./styled/ElementStyling";
import TextContext, { Text } from "./context/TextContext";
import { TodoType } from "./types/@types";

export interface ITodoElementProps {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  todos: TodoType[];
}

export default function TodoElement({
  todo,
  setTodos,
  todos,
}: ITodoElementProps) {
  const { text, setText } = useContext(TextContext) as Text;
  const [edit, setEdit] = React.useState<boolean>(true);

  /*changeDone*/
  const onChangeDone: React.MouseEventHandler<HTMLButtonElement> = () => {
    const changeDoneTodo = { ...todo, done: !todo.done };

    const changeDoneTodos = todos.map((each) =>
      each.id === todo.id ? changeDoneTodo : each
    );

    setTodos(changeDoneTodos);

    console.log(todo.done);
  };

  /* filter  */
  const onFilterTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    const filterTodos = todos.filter((each) => each.id !== todo.id);

    setTodos(filterTodos);
  };

  /* edit */
  const onEditTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (text === "") return;

    const changeTextTodos = todos.map((each) =>
      each.id === todo.id ? { ...each, text: text } : each
    );
    setTodos(changeTextTodos);
    setEdit(!edit);
    setText("");
  };

  return (
    <StyledElement>
      <StyledText complete={todo.done}>{todo.text}</StyledText>
      {todo.done ? (
        <StyledButtonBox>
          <button onClick={onChangeDone}>복구</button>
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
