import styled from "styled-components";
import tick from "../../assets/tick.svg";

export const FormTemplate = styled.form`
  box-sizing: border-box;
`;

export const RightWrapper = styled.div`
  text-align: right;
`;

export const InputWrapper = styled.div`
  margin: 10px 0 20px;
  &:last-of-type {
    margin: 10px 0 30px;
  }
`;

export const CheckboxLabel = styled.label`
  color: ${(props) => props.theme.color.white};
`;

export const Checkbox = styled.input`
  visibility: hidden;
  width: 3em;
`;

export const Checkmark = styled.span`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    width: 20px;
    height: 20px;
    border: 1px solid white;
    background: ${(props) => (props.displayTick ? `url(${tick})` : "none")};
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
