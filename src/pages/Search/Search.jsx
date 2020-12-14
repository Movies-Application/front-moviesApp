import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../../context/AuthContext";

//Search by input value seting movies data results
function searchByTitle(title, setMovieData) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?title=${title}&type=get-movies-by-title`,
    {
      headers: {
        "x-rapidapi-key": `dfcceae8f9msh391de961f277cd7p148597jsn0fe6d28eae90`,
        "x-rapidapi-host": `movies-tvshows-data-imdb.p.rapidapi.com`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setMovieData(data.movie_results);
    })
    .catch((err) => {
      console.error(err);
    });
}

//Get movie image and poster by imdb_id value
function getImages(imdbId, setImages) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${imdbId}&type=get-movies-images-by-imdb`,
    {
      headers: {
        "x-rapidapi-key": "dfcceae8f9msh391de961f277cd7p148597jsn0fe6d28eae90",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setImages(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

//Get movie details by imdb_id value
function getMovieDetails(imdbId, setMovieDetails) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${imdbId}&type=get-movie-details`,
    {
      headers: {
        "x-rapidapi-key": "dfcceae8f9msh391de961f277cd7p148597jsn0fe6d28eae90",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
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

//Post selected movie to database (collection)
function addCollection(auth, movieDetails, images) {
  fetch(`http://localhost:8080/collection/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      imdb_id: movieDetails.imdb_id,
      title: movieDetails.title,
      poster: images.poster,
      fanart: images.fanart,
      description: movieDetails.description,
      duration: movieDetails.runtime,
      genres: movieDetails.genres.toString(),
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

//Post selected movie to database (watchlist)
function addWatchlist(auth, movieDetails, images) {
  fetch(`http://localhost:8080/watchlist/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      imdb_id: movieDetails.imdb_id,
      title: movieDetails.title,
      poster: images.poster,
      fanart: images.fanart,
      description: movieDetails.description,
      duration: movieDetails.runtime,
      genres: movieDetails.genres.toString(),
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function Search() {
  const [title, setTitle] = useState(); //get input value
  const [movieData, setMovieData] = useState(); //movie list by search value
  const [imdbId, setImdbId] = useState(""); //set movie imdb_id
  const [images, setImages] = useState(""); //get movie images
  const [movieDetails, setMovieDetails] = useState(); //get movie details
  const [trendingImages, setTrendinImages] = useState(""); //get trendig movie images
  const [trendingDetails, setTrendinDetails] = useState(""); //get trendig movie details
  const auth = useContext(AuthContext);

  //Get movie details to "Now trending" section
  useEffect(() => {
    getImages(localStorage.getItem("trending_movie_id"), setTrendinImages);
    getMovieDetails(
      localStorage.getItem("trending_movie_id"),
      setTrendinDetails
    );
  }, []);

  return (
    <Hero image={heroImg} shadow>
      <Section>
        <StyledSection
          pageTitle="How many movies have You seen?"
          description="It has been estimated that there are approximately 500.000 movies worldwide. How many have left for you to watch? Let's explore!"
        ></StyledSection>
      </Section>

      {/* Get random movie */}
      <Section shadow>
        <S.SecondaryTitle>NOW TRENDING:</S.SecondaryTitle>
        <S.MovieWrapper>
          <Card
            poster={trendingImages.poster}
            title={trendingDetails.title}
            rating={Number(trendingDetails.imdb_rating).toFixed(1)}
          />
          <S.PaddingLeftWrapper>
            <MovieSection
              description={trendingDetails.description}
              runtime={trendingDetails.runtime}
              year={trendingDetails.year}
              genres={trendingDetails.genres}
              rating={trendingDetails.imdb_rating}
              votes={trendingDetails.vote_count}
              toCollection={(e) => {
                e.preventDefault();
                addCollection(auth, movieDetails, images); //nepasiima imdb_id??
              }}
              toWatchlist={(e) => {
                e.preventDefault();
                addWatchlist(auth, movieDetails, images);
              }}
            />
          </S.PaddingLeftWrapper>
        </S.MovieWrapper>
      </Section>

      {/* Get search value an results */}
      <Section>
        <S.SecondaryTitle>EXPLORE!</S.SecondaryTitle>
        <S.SearchSectionBorder>
          <S.SearchBar>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                searchByTitle(title, setMovieData);
              }}
            >
              <S.SearchWrapper>
                <InputField
                  custom="custom"
                  placeholder="enter movie title"
                  label="none"
                  handleChange={(e) => {
                    setTitle(e.target.value.split(".").join(" "));
                  }}
                />
                <S.SearchButton type="submit" />
              </S.SearchWrapper>
            </form>
          </S.SearchBar>

          {movieData && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setImdbId(e.target.value);
                getImages(imdbId, setImages);
                getMovieDetails(imdbId, setMovieDetails);
              }}
            >
              <Select>
                {movieData.map((movie) => (
                  <SelectOption
                    name="movie"
                    key={movie.imdb_id}
                    movie_id={movie.imdb_id}
                    title={movie.title}
                    year={movie.year !== 0 && movie.year}
                    handleChange={(e) => {
                      setImdbId(e.target.value);
                    }}
                  />
                ))}
              </Select>
            </form>
          )}
        </S.SearchSectionBorder>
      </Section>

      {/* Get movie selected movie from select section by imdb_id */}
      <Section>
        {movieDetails && (
          <S.MovieWrapper>
            <Card
              poster={images.poster}
              title={movieDetails.title}
              rating={Number(movieDetails.imdb_rating).toFixed(1)}
            />
            <S.PaddingLeftWrapper>
              <MovieSection
                description={movieDetails.description}
                runtime={movieDetails.runtime}
                year={movieDetails.year}
                genres={movieDetails.genres}
                votes={movieDetails.vote_count}
                rating={movieDetails.imdb_rating}
                toCollection={(e) => {
                  e.preventDefault();
                  addCollection(auth, movieDetails, images);
                }}
                toWatchlist={(e) => {
                  e.preventDefault();
                  addWatchlist(auth, movieDetails, images);
                }}
              />
            </S.PaddingLeftWrapper>
          </S.MovieWrapper>
        )}
      </Section>
    </Hero>
  );
}

export default Search;
