import { Dispatch, SetStateAction } from "react";

export interface TodoType {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}
