import * as React from "react";
import TextContext, { Text } from "./context/TextContext";

export interface ITestProps {}

export default function Test(props: ITestProps) {
  const { text, setText } = React.useContext(TextContext) as Text;

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.target.value);

  return (
    <div>
      <input value={text} onChange={onChange} />
    </div>
  );
}
