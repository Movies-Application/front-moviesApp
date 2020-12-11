import styled from "styled-components";
import closeIcon from "../../assets/close-button.svg";

export const Notification = styled.div`
  display: ${(props) => (props.displaySelf ? "flex" : "none")};
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 2px;
  background: rgb(123, 123, 123, 0.3);
  box-sizing: border-box;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const Message = styled.span`
  width: 95%;
  color: ${(props) => props.theme.color.white};
  text-align: left;
  text-transform: uppercase;
`;

export const CloseButton = styled.button`
  position: relative;
  justify-content: flex-start;
  width: 25px;
  height: 25px;
  margin: -12px -12px 0 0;
  background: url(${closeIcon});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: 50%;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-size: 60%;
  }
`;
