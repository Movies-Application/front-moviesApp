import React from "react";
import PropTypes from "prop-types";
import * as S from "./MovieSection.style";
import { Button } from "../";

function MovieSection({
  description,
  runtime,
  year,
  genres,
  rating,
  votes,
  title,
  toWatchlist,
  toCollection,
  noButton,
  noWatchlist,
}) {
  return (
    <S.MovieSection noButton={noButton}>
      <div>
        <S.DescriptionBlock>
          <S.MovieTitle noButton={noButton}>{title}</S.MovieTitle>
          <S.DescriptionHeader>ABOUT</S.DescriptionHeader>
          <S.DescriptionWrapper>
            <S.Description>{description}</S.Description>
          </S.DescriptionWrapper>
          <S.DetailsWrapper>
            <S.DetailsHeader>
              IMDB RATING:{" "}
              <S.CustomText>
                {rating} / 10 (votes: {votes})
              </S.CustomText>
            </S.DetailsHeader>
            <S.DetailsHeader>
              DURATION: <S.CustomText>{runtime} min.</S.CustomText>
            </S.DetailsHeader>
            <S.DetailsHeader>
              RELEASE DATE: <S.CustomText>{year}</S.CustomText>
            </S.DetailsHeader>
            <S.DetailsHeader>
              GENRES: <S.CustomText>{genres}</S.CustomText>
            </S.DetailsHeader>
          </S.DetailsWrapper>
        </S.DescriptionBlock>
      </div>
      <S.ButtonBlock noButton={noButton}>
        <S.ButtonSubmit onSubmit={toWatchlist} noWatchlist={noWatchlist}>
          <Button type="submit" color="primary">
            TO WATCHLIST
          </Button>
        </S.ButtonSubmit>
        <S.ButtonSubmit onSubmit={toCollection}>
          <Button type="submit" color="secondary">
            TO COLLECTION
          </Button>
        </S.ButtonSubmit>
      </S.ButtonBlock>
    </S.MovieSection>
  );
}

Button.propTypes = {
  description: PropTypes.string,
  runtime: PropTypes.number,
  year: PropTypes.number,
  genres: PropTypes.string,
  rating: PropTypes.number,
  votes: PropTypes.number,
  title: PropTypes.string,
  toWatchlist: PropTypes.func,
  toCollection: PropTypes.func,
  noButton: PropTypes.bool,
  noWatchlist: PropTypes.bool,
};

export default MovieSection;
