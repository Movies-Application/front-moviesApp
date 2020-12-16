import React from "react";
import * as S from "./Card.style";

export default function Card({ poster, title, rating, infoNone }) {
  return (
    <S.Card infoNone={infoNone}>
      <S.Poster poster={poster}></S.Poster>
      <S.MovieInfo infoNone={infoNone}>
        <S.MovieTitle>{title}</S.MovieTitle>
        <S.Rating>{rating} / 10</S.Rating>
      </S.MovieInfo>
    </S.Card>
  );
}
