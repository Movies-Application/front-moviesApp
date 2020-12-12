import React, { useState } from "react";
import {
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
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
        "x-rapidapi-host": `${process.env.REACT_APP_X_RAPIDAPI_HOST}`,
      },
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

function Search() {
  const [title, setTitle] = useState();
  const [movieData, setMovieData] = useState();
  const [option, setOption] = useState("");

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
                console.log(title);
              }}
            />
            <S.SearchButton type="submit" />
          </S.SearchWrapper>
        </S.SearchBar>

        {movieData && (
          <Select selected={option}>
            {movieData.map((movie) => (
              <SelectOption
                key={movie.imdb_id}
                movie_id={movie.imdb_id}
                title={movie.title}
                year={movie.year}
                handleChange={(e) => {
                  setOption(movie.title);
                  console.log(e.target.value);
                }}
              />
            ))}
          </Select>
        )}
      </Section>
    </Hero>
  );
}

export default Search;
