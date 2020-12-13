import styled from "styled-components";
import toggleIcon from "../../assets/down-chevron.svg";

export const DropDownContainer = styled.div`
  width: 100%;
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  color: rgb(251, 251, 251, 0.3);
  background: ${(props) => props.theme.color.black};
  cursor: pointer;
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
  max-height: 194px;
  overflow: scroll;
  color: rgb(251, 251, 251, 0.5);
  overflow: auto;
  &&::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.black};
  }

  &&::-webkit-scrollbar {
    width: 1px;
  }

  &&::-webkit-scrollbar-thumb {
    border: 1px solid rgb(251, 251, 251, 0.1);
  }
`;

export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.white};
`;
