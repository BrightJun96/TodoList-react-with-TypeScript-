import * as React from "react";
import TextContext from "./components/context/TextContext";
import TodoContext from "./components/context/TodoContext";
import TodoContainer from "./components/TodoContainer";
import { TodoType } from "./components/types/@types";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [text, setText] = React.useState<string>("");
  const [todos, setTodos] = React.useState<TodoType[]>([
    {
      id: "a",
      text: "react",
      done: true,
    },
    {
      id: "b",
      text: "typescript",
      done: true,
    },
    { id: "c", text: "next.js", done: false },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <TextContext.Provider value={{ text, setText }}>
        <TodoContainer />
      </TextContext.Provider>
    </TodoContext.Provider>
  );
}
