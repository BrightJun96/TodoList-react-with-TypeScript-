import * as React from "react";
import { TodoType } from "./TodoContainer";

export interface ITodoElementProps {
  todo: TodoType;
}

export default function TodoElement({ todo }: ITodoElementProps) {
  return (
    <div>
      <div>
        <h1>{todo.text}</h1>
      </div>
    </div>
  );
}
