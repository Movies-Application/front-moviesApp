import React, { useEffect } from "react";
import { Hero, Circle, Section, StyledSection } from "../../components/";
import * as S from "./Home.style";
import toDo from "../../assets/sands-of-time.svg";
import searchIcon from "../../assets/search-icon.svg";
import myCollection from "../../assets/video-camera.svg";
import heroImg from "../../assets/red-seats.jpeg";

function Home() {
  useEffect(() => {
    fetch(
      "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-trending-movies",
      {
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
          "x-rapidapi-host": `${process.env.REACT_APP_X_RAPIDAPI_HOST}`,
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
          description="And get started!"
        >
          <S.FlexWrapper>
            <S.MarginWrapper>
              <Circle route="/collection" image={myCollection} />
            </S.MarginWrapper>
            <S.MarginWrapper>
              <Circle route="/watchlist" image={toDo} />
            </S.MarginWrapper>
            <S.MarginWrapper>
              <Circle route="/search" image={searchIcon} />
            </S.MarginWrapper>
          </S.FlexWrapper>
        </StyledSection>
      </Section>
    </Hero>
  );
}

export default Home;
