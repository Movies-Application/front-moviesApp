import React from "react";
import * as S from "./Card.style";

export default function Card({ poster }) {
  return (
    <S.Card>
      <S.Poster image={poster}></S.Poster>
      <S.MovieInfo>
        <S.MovieTitle>Movie title</S.MovieTitle>
        <S.Rating>9.8 / 10</S.Rating>
      </S.MovieInfo>
    </S.Card>
  );
}
