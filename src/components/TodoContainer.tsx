import * as React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export interface ITodoContainerProps {}

export interface TodoType {
  id: string;
  text: string;
  done: boolean;
}

export type TodoArrayType = Array<TodoType>;
export default function TodoContainer(props: ITodoContainerProps) {
  const [todos, setTodos] = React.useState<TodoArrayType | null | undefined>([
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
    <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
