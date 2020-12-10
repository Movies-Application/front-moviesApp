import styled from "styled-components";
import notVisibleImg from "../../assets/no-visibility.svg";

export const Label = styled.label`
  width: 100%;
  padding-left: 10px;
  color: ${(props) => props.theme.color.white};
  opacity: ${(props) => (props.displayItem ? 1 : 0)};
  text-transform: capitalize;
  transition: 0.5s;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.white};
  background: none;
  color: ${(props) => props.theme.color.white};
  outline: none;
  box-sizing: border-box;
  margin: 10px 0 20px;

  background-image: ${(props) =>
    props.visibility && props.displayEye ? `url(${notVisibleImg})` : "none"};
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 30px;
  &:last-of-type {
    margin: 10px 0 30px;
  }
  &::placeholder {
    color: ${(props) => props.theme.color.white};
    opacity: ${(props) => (props.displayItem ? 0 : 1)};
    text-transform: capitalize;
    transition: 0.2s;
  }
`;
