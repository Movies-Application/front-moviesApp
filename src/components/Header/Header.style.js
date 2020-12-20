import styled from "styled-components";
import { Link } from "react-router-dom";
import logOutIcon from "../../assets/logout.svg";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  padding: 20px 0 10px;
`;

export const Actions = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  /* font-size: 0.9em; */
  text-decoration: none;
  transition: 0.2s;
  color: ${(props) => props.theme.color.white};
  margin: 0 10px 10px;
  &:hover {
    transform: scale(1.07);
  }
`;

export const Logout = styled.button`
  margin-left: 10px;
  width: 20px;
  border: none;
  background: url(${logOutIcon});
  background-size: 90%;
  background-repeat: no-repeat;
  text-decoration: none;
  transition: 0.2s;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.07);
  }
`;
