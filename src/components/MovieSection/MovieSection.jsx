import React from "react";
import * as S from "./MovieSection.style";

function MovieSection({ description, runtime, year, genres, rating, votes }) {
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
      <S.DetailsBlock2>
        <S.DetailsHeader>
          IMDB RATING: <S.CustomText>{rating} / 10</S.CustomText>
        </S.DetailsHeader>
        <S.DetailsHeader>
          VOTES: <S.CustomText>{votes}</S.CustomText>
        </S.DetailsHeader>
      </S.DetailsBlock2>
    </S.MovieSection>
  );
}

export default MovieSection;
