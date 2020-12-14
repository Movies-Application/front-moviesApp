import styled from "styled-components";

export const Button = styled.button`
  min-width: 15%;
  background: ${(props) =>
    (props.color === "primary" && props.theme.color.white) ||
    (props.color === "secondary" && props.theme.color.grey)};
  color: ${(props) => props.color === "secondary" && props.theme.color.white};
  opacity: ${(props) => props.color === "secondary" && "0.5"};
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  text-transform: capitalize;

  &:hover {
    opacity: ${(props) => props.color === "secondary" && "1"};
  }
`;
