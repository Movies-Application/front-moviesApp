import React, { useEffect } from "react";
import { Hero, Circle, Section, StyledSection } from "../../components/";
import * as S from "./Home.style";
import addIcon from "../../assets/plus.svg";
import searchIcon from "../../assets/search-icon.svg";
import myCollection from "../../assets/video-camera.svg";
import heroImg from "../../assets/red-seats.jpeg";

function Home() {
  useEffect(() => {
    fetch(
      "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-trending-movies",
      {
        headers: {
          "x-rapidapi-key":
            "dfcceae8f9msh391de961f277cd7p148597jsn0fe6d28eae90",
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "trending_movie_id",
          data.movie_results[7].imdb_id
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Hero image={heroImg}>
      <Section>
        <StyledSection
          pageTitle="make yourself comfortable"
          description="Choose an action and get started!"
        >
          <S.FlexWrapper>
            <Circle route="/add" image={addIcon} />
            <Circle route="/search" image={searchIcon} />
            <Circle route="" image={myCollection} />
          </S.FlexWrapper>
        </StyledSection>
      </Section>
    </Hero>
  );
}

export default Home;
