import React, { useState } from "react";
import {
  Card,
  Hero,
  InputField,
  Section,
  Select,
  SelectOption,
  StyledSection,
} from "../../components/";
import * as S from "./Search.style";
import heroImg from "../../assets/blury-lights2.jpeg";

function searchByTitle(title, setMovieData) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?title=${title}&type=get-movies-by-title`,
    {
      headers: {},
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setMovieData(data.movie_results);
      console.log(data.movie_results);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getPoster(imdbId, setPoster) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${imdbId}&type=get-movies-images-by-imdb`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setPoster(data.poster);
      console.log(data.poster);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getMovieDetails(imdbId, setMovieDetails) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${imdbId}&type=get-movie-details`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setMovieDetails(data);
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function Search() {
  const [title, setTitle] = useState(); //get input value
  const [movieData, setMovieData] = useState(); //movie list by search value
  const [option, setOption] = useState(); //set movie selection
  const [imdbId, setImdbId] = useState(""); //set movie imdb_id
  const [poster, setPoster] = useState(""); //get movie poster
  const [movieDetails, setMovieDetails] = useState(""); //get movie details

  return (
    <Hero image={heroImg} shadow>
      <Section>
        <StyledSection
          pageTitle="How many movies have You seen?"
          description="It has been estimated that there are approximately 500 000 movies global."
        ></StyledSection>
      </Section>
      <Section>
        <S.SearchBar>
          <S.SearchWrapper
            onSubmit={(e) => {
              e.preventDefault();
              searchByTitle(title, setMovieData);
            }}
          >
            <InputField
              placeholder="enter movie title"
              label="none"
              handleChange={(e) => {
                setTitle(e.target.value.split(".").join(" "));
              }}
            />
            <S.SearchButton type="submit" />
          </S.SearchWrapper>
        </S.SearchBar>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setImdbId(e.target.value);
            getPoster(imdbId, setPoster);
            getMovieDetails(imdbId, setMovieDetails);
          }}
        >
          {movieData && (
            <Select selected={option}>
              {movieData.map((movie) => (
                <SelectOption
                  name="movie"
                  key={movie.imdb_id}
                  movie_id={movie.imdb_id}
                  title={movie.title}
                  year={movie.year !== 0 && movie.year}
                  handleChange={(e) => {
                    setOption(movie.title);
                    console.log(e.target.value);
                    setImdbId(e.target.value);
                  }}
                />
              ))}
            </Select>
          )}
        </form>
      </Section>
      <Section>
        <S.MovieWrapper>
          <Card
            poster={poster}
            title={movieDetails.title}
            rating={Number(movieDetails.imdb_rating).toFixed(1)}
          />
          <S.MovieDetailsWrapper>
            <S.SecondaryHeading>ABOUT</S.SecondaryHeading>

            <S.MovieDescription>{movieDetails.description}</S.MovieDescription>
            <h4>
              Duration: <span>{movieDetails.runtime} min.</span>
            </h4>
            <h4>
              Release year: <span>{movieDetails.year}</span>
            </h4>
            <h4>
              Genres: <span>{movieDetails.genres}</span>
            </h4>
          </S.MovieDetailsWrapper>
        </S.MovieWrapper>
      </Section>
    </Hero>
  );
}

export default Search;
