import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/video-camera.svg";

function Header() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={logoImg} alt="Logo" />
      </Link>
      <S.Actions>
        <S.StyledLink to="/login">Login</S.StyledLink>
        <S.StyledLink to="/register">Register</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
