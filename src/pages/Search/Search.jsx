import React, { useState } from "react";
import {
  Card,
  Hero,
  InputField,
  MovieSection,
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
          description="It has been estimated that there are approximately 500 000 movies worldwide. How many left for you to watch? Let's explore!"
        ></StyledSection>
      </Section>
      <Section>
        {movieDetails && (
          <S.MovieWrapper>
            <Card
              poster={poster}
              title={movieDetails.title}
              rating={Number(movieDetails.imdb_rating).toFixed(1)}
            />
            <S.PaddingLeftWrapper>
              <MovieSection
                description={movieDetails.description}
                runtime={movieDetails.runtime}
                year={movieDetails.year}
                genres={movieDetails.genres.join(", ")}
              />
            </S.PaddingLeftWrapper>
          </S.MovieWrapper>
        )}
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
    </Hero>
  );
}

export default Search;
