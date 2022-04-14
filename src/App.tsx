import * as React from "react";
import TodoContainer from "./components/TodoContainer";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return <TodoContainer />;
}
