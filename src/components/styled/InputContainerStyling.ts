import styled from "styled-components";
import oc from "open-color";
export const StyledInputContainer = styled.div`
  width: 100%;

  form {
    display: flex;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
    line-height: 1.3rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    padding-left: 1rem;
  }

  button {
    border: none;
    outline: none;
    font-size: 1.3rem;
    height: 100%;
    padding: 1rem;

    background: ${oc.gray[4]};

    cursor: pointer;
    &:hover {
      background: ${oc.gray[5]};
    }
  }
`;
