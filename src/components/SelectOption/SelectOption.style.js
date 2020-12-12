import styled from "styled-components";

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  padding: 10px 20px;
  background: ${(props) => props.theme.color.black}; // plus
  box-sizing: border-box;
  color: ${(props) => props.theme.color.white}; // plus
  &:not(:last-child) {
    border-bottom: 1px solid rgb(251, 251, 251, 0.2);
  }
`;

export const Option = styled.input`
  display: none;
`;
