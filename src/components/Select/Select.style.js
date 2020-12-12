import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 100%;
`;

export const DropDownHeader = styled.div`
  margin-bottom: 20px;
  padding: 10px 20px;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  color: ${(props) => props.theme.color.white}; //plus
  background: ${(props) => props.theme.color.black}; //plus
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  max-height: 100px;
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
  /* width: 100%; */
  /* background: ${(props) => props.theme.color.black}; // plus */
  box-sizing: border-box;
  color: ${(props) => props.theme.color.white}; // plus */
`;

export const W = styled.div`
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

export const ListItem = styled.input`
  display: none;
`;
