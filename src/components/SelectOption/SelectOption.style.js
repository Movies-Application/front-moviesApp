import styled from "styled-components";
import infoIcon from "../../assets/info.svg";

export const SelectOption = styled.div`
  display: flex;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  padding: 10px 20px;
  background: ${(props) => props.theme.color.black};
  box-sizing: border-box;
  color: ${(props) => props.theme.color.white};
  &:not(:last-child) {
    border-bottom: 1px solid rgb(251, 251, 251, 0.2);
  }
`;

export const Option = styled.input`
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const AboutButton = styled.button`
  width: 10%;
  background: url(${infoIcon});
  background-color: ${(props) => props.theme.color.black};
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-bottom: 1px solid rgb(251, 251, 251, 0.2);
  cursor: pointer;
  outline: none;
  display: ${(props) => (props.displayButton ? "block" : "none")};

  &:hover {
    background-size: 27px;
  }
`;
