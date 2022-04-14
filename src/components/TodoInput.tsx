import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoArrayType } from "./TodoContainer";

import { v4 as uuid4 } from "uuid";
export interface ITodoInputProps {
  todos: TodoArrayType | null | undefined;
  setTodos: Dispatch<SetStateAction<TodoArrayType | null | undefined>>;
}

export default function TodoInput({ todos, setTodos }: ITodoInputProps) {
  const [todoText, setTodoText] = useState<string>("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (todoText === "") {
    }

    const uniqueId = uuid4();
    console.log(uniqueId);

    const newTodo = todos?.concat({
      id: uniqueId,
      text: todoText,
      done: false,
    });

    setTodos(newTodo);
    setTodoText("");
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTodoText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-text">
          <input
            type="text"
            name="todo-text"
            value={todoText}
            onChange={onChange}
          />
        </label>
        <button>추가</button>
      </form>
    </div>
  );
}
