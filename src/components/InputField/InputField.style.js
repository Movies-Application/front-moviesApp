import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  display: ${(props) => (props.label === "none" ? "none" : "block")};
  padding-left: 10px;
  color: ${(props) => props.theme.color.white};
  opacity: ${(props) => (props.displayItem ? 1 : 0)};
  text-transform: capitalize;
  transition: 0.5s;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0 10px 20px;
  border: none;
  border-bottom: ${(props) =>
    props.custom === "custom" ? "none" : `1px solid rgb(251, 251, 251)`};
  background: none;
  color: ${(props) => props.theme.color.white};
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: rgb(251, 251, 251, 0.5);
    opacity: ${(props) => (props.displayItem ? 0 : 1)};
    text-transform: capitalize;
    transition: 0.2s;
  }
`;
