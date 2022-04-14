import * as React from "react";
import TodoElement from "./TodoElement";
import { TodoArrayType } from "./TodoContainer";

export interface IAppProps {
  todos: TodoArrayType | null | undefined;
}
export default function TodoList({ todos }: IAppProps) {
  return (
    <div>
      {todos && todos.map((todo) => <TodoElement todo={todo} key={todo.id} />)}
    </div>
  );
}
