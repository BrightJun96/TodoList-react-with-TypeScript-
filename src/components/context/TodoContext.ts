import { createContext } from "react";
import { TodoState } from "../types/@types";

const TodoContext = createContext<null | TodoState>(null);

export default TodoContext;
