import { createContext, Dispatch, SetStateAction } from "react";

export interface Text {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const TextContext = createContext<Text | null>(null);
export default TextContext;
