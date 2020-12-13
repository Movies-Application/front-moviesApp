import React from "react";
import * as S from "./MovieSection.style";

function MovieSection({ description, runtime, year, genres }) {
  return (
    <S.MovieSection>
      <S.DescriptionBlock>
        <S.DescriptionHeader>ABOUT</S.DescriptionHeader>
        <S.DescriptionWrapper>
          <S.Description>{description}</S.Description>
        </S.DescriptionWrapper>
      </S.DescriptionBlock>
      <S.DetailsBlock>
        <S.DetailsHeader>
          DURATION: <S.CustomText>{runtime} min.</S.CustomText>
        </S.DetailsHeader>
        <S.DetailsHeader>
          RELEASE DATE: <S.CustomText>{year}</S.CustomText>
        </S.DetailsHeader>
        <S.DetailsHeader>
          GENRES: <S.CustomText>{genres}</S.CustomText>
        </S.DetailsHeader>
      </S.DetailsBlock>
    </S.MovieSection>
  );
}

export default MovieSection;
