import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/video-camera.svg";

function Header({ loggedIn, logOut }) {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={logoImg} alt="Logo" />
      </Link>
      {!loggedIn && (
        <S.Actions>
          <S.StyledLink to="/login">Login</S.StyledLink>
          <S.StyledLink to="/register">Register</S.StyledLink>
        </S.Actions>
      )}
      {loggedIn && (
        <S.Actions>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/collection">Collection</S.StyledLink>
          <S.StyledLink to="/watchlist">Watchlist</S.StyledLink>
          <S.StyledLink to="/search">Search</S.StyledLink>
          <S.Logout onClick={logOut}>Log Out</S.Logout>
        </S.Actions>
      )}
    </S.Header>
  );
}

export default Header;
