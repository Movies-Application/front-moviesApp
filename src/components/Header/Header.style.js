import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.img`
  width: 70px;
  padding: 20px 0 10px;
`;

export const Actions = styled.nav`
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.8s ease-in-out;
  color: ${(props) => props.theme.color.white};

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
