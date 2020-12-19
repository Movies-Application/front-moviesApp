import styled from "styled-components";

export const DeleteBox = styled.div`
  display: ${(props) => (props.visibility === "true" ? "block" : "none")};
  text-align: center;
  padding: 20px;
  width: 300px;
  height: auto;
  background: rgb(6, 6, 6, 0.8);
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const H4 = styled.h4`
  margin-top: 0;
`;

export const StyledTitle = styled.span`
  text-transform: uppercase;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.form`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
