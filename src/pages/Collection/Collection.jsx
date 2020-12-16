import React, { useEffect, useContext, useState } from "react";
import { Card, Hero, Section, StyledSection } from "../../components/";
import { AuthContext } from "../../context/AuthContext";
import heroImg from "../../assets/blury-lights2.jpeg";
import * as S from "./Collection.style";

function Collection() {
  const [movieData, setMovieData] = useState();
  const [time, setTime] = useState();
  const auth = useContext(AuthContext);
  console.log(time);

  useEffect(() => {
    fetch(`http://localhost:8080/collection/`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        const time = data.map((movie) => ({
          time: movie.duration,
        }));
        console.log(time);
        const timeSum = Number(
          time.reduce((previous, current) => {
            return previous + current.time;
          }, 0)
        );
        return setTime((timeSum / 60).toFixed(2));
      })
      .catch((err) => console.log(err));
  }, [auth.token]);

  return (
    <Hero image={heroImg} shadow>
      <Section>
        {movieData && (
          <StyledSection
            pageTitle={`You have spend ${time} hours watching ${movieData.length} different stories!`}
          ></StyledSection>
        )}
      </Section>

      {/* Get movies (collection) from MySQL */}
      <Section>
        <S.Wrapper>
          {movieData &&
            movieData.map((movie) => (
              <S.MovieWrapper key={movie.id}>
                <Card
                  title={movie.title}
                  poster={movie.poster}
                  infoNone="true"
                />
              </S.MovieWrapper>
            ))}
        </S.Wrapper>
      </Section>
    </Hero>
  );
}

export default Collection;
