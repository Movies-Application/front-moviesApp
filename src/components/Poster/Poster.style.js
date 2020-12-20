import styled from "styled-components";
import infoIcon from "../../assets/info.svg";
import deleteIcon from "../../assets/delete.svg";

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 350px;
  border: 1px solid rgb(0, 0, 0, 0.3);
  background: ${(props) => props.theme.color.black};
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  transition: 0.3s;
  position: relative;
  box-shadow: ${(props) =>
    props.displayShadow === true && props.active === true
      ? "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)"
      : "none"};
  &&:hover {
    transform: ${(props) => (props.active ? "scale(1.1)" : "none")};
  }
`;

export const IconWrapper = styled.div`
  display: ${(props) =>
    props.displayLink === true && props.active === true ? "flex" : "none"};
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledLink = styled.button`
  width: 30px;
  height: 30px;
  background: url(${infoIcon});
  background-size: cover;
  margin-right: 10px;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.07);
  }
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: url(${deleteIcon});
  background-size: cover;
  cursor: pointer;
  outline: none;
  transition: 0.2s;
  &:hover {
    transform: scale(1.07);
  }
`;
