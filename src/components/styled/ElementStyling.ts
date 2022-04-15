import styled from "styled-components";
import oc from "open-color";

export const StyledElement = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${oc.gray[6]};
  height: 60px;

  h1 {
    flex: 1;
    text-align: left;
    padding-left: 1rem;
  }
`;

interface TextProps {
  complete?: boolean;
}
export const StyledText = styled.h1`
  flex: 1;
  text-align: left;
  padding-left: 1rem;
  text-decoration: ${(props: TextProps) =>
    props.complete ? "line-through" : "none"};
`;

export const StyledButtonBox = styled.div`
  display: flex;
  height: 100%;

  button {
    font-size: 1rem;
    background: ${oc.gray[5]};
    width: 50px;
    border: none;
    outline: none;
    padding: 0.5rem;
    border-right: 1px solid ${oc.gray[6]};
    cursor: pointer;
    &:hover {
      background: ${oc.gray[3]};
    }
  }
`;
