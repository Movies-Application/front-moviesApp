import styled from "styled-components";
import toggleIcon from "../../assets/down-chevron.svg";

export const DropDownContainer = styled.div`
  width: 100%;
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.black};
`;

export const Toggle = styled.button`
  background: url(${toggleIcon});
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow: auto;
  &&::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.color.black};
  }

  &&::-webkit-scrollbar {
    width: 10px;
    background-color: ${(props) => props.theme.color.black};
  }

  &&::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.black};
    border: 1px solid rgb(251, 251, 251, 0.3);
  }
`;

export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.white};
`;
