import styled from "styled-components";
import oc from "open-color";

export const StyledOuterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${oc.gray[1]};
`;

export const StyledInnerContainter = styled.div`
  width: 500px;
  min-height: 500px;
  background-color: ${oc.gray[2]};
  box-shadow: 3px 3px 5px 2px ${oc.gray[5]};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  text-align: center;
`;

export const StyledHeader = styled.div`
  width: 100%;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  background-color: ${oc.indigo[3]};
`;
