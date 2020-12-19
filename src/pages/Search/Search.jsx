import React, { useState, useEffect, useContext } from "react";
import {
  Hero,
  InputField,
  MovieSection,
  Notification,
  Poster,
  Section,
  Select,
  SelectOption,
  StyledSection,
} from "../../components/";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Search.style";
import heroImg from "../../assets/blury-lights2.jpeg";

// Search by input value and set movies data results
function searchByTitle(title, setMovieData) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?title=${title}&type=get-movies-by-title`,
    {
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
        "x-rapidapi-host": `${process.env.REACT_APP_X_RAPIDAPI_HOST}`,
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

//Get movie poster by imdb_id value
function getImages(imdbId, setImages) {
  fetch(
    `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${imdbId}&type=get-movies-images-by-imdb`,
    {
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
        "x-rapidapi-host": `${process.env.REACT_APP_X_RAPIDAPI_HOST}`,
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

//Post selected movie to database (collection)
function addCollection(auth, movieDetails, images, setError) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/collection/`, {
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
      genres: movieDetails.genres.join(", "),
      seen: true,
    }),
  })
    .then((res) => res.json())
    .then((res) => setError(res.msg))
    .catch(() =>
      setError("oops.. something went wrong! please try again later.")
    );
}

//Post selected movie to database (watchlist)
function addWatchlist(auth, movieDetails, images, setError) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/watchlist/`, {
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
      genres: movieDetails.genres.join(", "),
      seen: false,
    }),
  })
    .then((res) => res.json())
    .then((res) => setError(res.msg))
    .catch(() =>
      setError("oops.. something went wrong! please try again later.")
    );
}

function Search() {
  const [title, setTitle] = useState(); // get input value
  const [movieData, setMovieData] = useState(); // movie list by search value
  const [imdbId, setImdbId] = useState(""); // set movie imdb_id
  const [images, setImages] = useState(""); // get movie images
  const [movieDetails, setMovieDetails] = useState(); // get movie details
  const [trendingImages, setTrendinImages] = useState(""); // get trendig movie images
  const [trendingDetails, setTrendinDetails] = useState(""); // get trendig movie details
  const [error, setError] = useState(false); // set error

  const auth = useContext(AuthContext);
  const trendingId = localStorage.getItem("trending_movie_id"); // get trenging movie id from local storage

  //Get movie details to "Now trending" section
  useEffect(() => {
    getImages(trendingId, setTrendinImages);
    getMovieDetails(trendingId, setTrendinDetails);
  }, [trendingId]);

  return (
    <Hero image={heroImg} shadow size="cover">
      <Section>
        <StyledSection
          pageTitle="How many movies have You seen?"
          description="It has been estimated that there are approximately 500.000 movies worldwide. How many have left for you to watch? Let's explore!"
        ></StyledSection>
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
                    setError(false);
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
                      setError(false);
                    }}
                  />
                ))}
              </Select>
            </form>
          )}
        </S.SearchSectionBorder>

        {/* Get movie selected movie from select section by imdb_id */}

        {error && (
          <S.TopMarginWrapper>
            <Notification>{error}</Notification>
          </S.TopMarginWrapper>
        )}
        {movieDetails && (
          <S.MovieWrapper>
            <Poster poster={images.poster} />

            <S.PaddingLeftWrapper>
              <MovieSection
                title={movieDetails.title}
                description={movieDetails.description}
                runtime={movieDetails.runtime}
                year={movieDetails.year}
                genres={movieDetails.genres.join(", ")}
                votes={movieDetails.vote_count}
                rating={movieDetails.imdb_rating}
                toCollection={(e) => {
                  e.preventDefault();
                  addCollection(auth, movieDetails, images, setError);
                  setError(true);
                }}
                toWatchlist={(e) => {
                  e.preventDefault();
                  addWatchlist(auth, movieDetails, images, setError);
                  setError(true);
                }}
              />
            </S.PaddingLeftWrapper>
          </S.MovieWrapper>
        )}
      </Section>

      {/* Get random movie */}
      <Section shadow>
        <S.SecondaryTitle>NOW TRENDING:</S.SecondaryTitle>
        <S.MovieWrapper>
          <Poster poster={trendingImages.poster} />
          <S.PaddingLeftWrapper>
            <MovieSection
              noButton
              title={trendingDetails.title}
              description={trendingDetails.description}
              runtime={trendingDetails.runtime}
              year={trendingDetails.year}
              genres={trendingDetails.genres}
              rating={trendingDetails.imdb_rating}
              votes={trendingDetails.vote_count}
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
      </Section>
    </Hero>
  );
}

export default Search;
