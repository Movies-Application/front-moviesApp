import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Hero, Poster, Section, MovieSection, Loading } from "../../components";
import * as S from "./AboutCollection.style";
import heroImg from "../../assets/blury-lights2.jpeg";

function getMovie(movieId, auth, setMovie) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/collection/${movieId}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setMovie(data[0]);
    })
    .catch((err) => console.log(err));
}

//Get movie details by imdb_id value
function getMovieDetails(movieImdbId, setMovieDetails) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${movieImdbId}&type=get-movie-details`,
    {
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
        "x-rapidapi-host": `${process.env.REACT_APP_X_RAPIDAPI_HOST}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setMovieDetails(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function AboutCollection() {
  const movieId = localStorage.getItem("selectedMovie");
  const movieImdbId = localStorage.getItem("selectedMovieImdb");
  const [movie, setMovie] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    getMovie(movieId, auth, setMovie);
    getMovieDetails(movieImdbId, setMovieDetails);
  }, [movieId, auth, movieImdbId]);

  return (
    <>
      {movie && movieDetails ? (
        <Hero image={movie.fanart !== "" ? movie.fanart : heroImg} shadow>
          <Section>
            <S.MovieWrapper>
              <Poster poster={movie.poster} />
              <S.MarginLeft>
                <MovieSection
                  noButton
                  title={movie.title}
                  description={movie.description}
                  runtime={movie.duration}
                  year={movieDetails.year}
                  genres={movie.genres}
                  votes={movieDetails.vote_count}
                  rating={movieDetails.imdb_rating}
                />
              </S.MarginLeft>
            </S.MovieWrapper>
          </Section>
        </Hero>
      ) : (
        <Hero image={heroImg} shadow>
          <Section>
            <Loading />
          </Section>
        </Hero>
      )}
    </>
  );
}

export default AboutCollection;
