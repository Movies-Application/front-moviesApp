import React, { useEffect, useContext, useState } from "react";
import {
  Hero,
  Loading,
  Notification,
  Poster,
  Section,
  StyledSection,
} from "../../components/";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom"; //
import heroImg from "../../assets/blury-lights2.jpeg";
import * as S from "./Collection.style";

function deleteMovie(id, auth, setMovieData, movieData, setError) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  })
    .then((res) => {
      setMovieData(movieData.filter((movie) => movie.id !== id));
      return res.json();
    })
    .then((res) => setError(res.msg))
    .catch(() =>
      setError("oops.. something went wrong! please try again later.")
    );
}

function Collection() {
  const [movieData, setMovieData] = useState();
  const [time, setTime] = useState();
  const [error, setError] = useState(false);

  const auth = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/collection/`, {
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
        {movieData ? (
          <StyledSection
            pageTitle={
              movieData.length !== 0
                ? `My Collection`
                : `My Collection is empty`
            }
            description={
              movieData.length !== 0
                ? `You have ${movieData.length} movies in Your collection. It took ${time} hours to review them!`
                : 'You have no movies in Your collection. Add some by visiting "Search" page'
            }
          />
        ) : (
          <Loading />
        )}
      </Section>

      {/* Get movies (collection) from MySQL */}
      <Section>
        {error && <Notification>{error}</Notification>}
        <S.Wrapper>
          {movieData &&
            movieData.map((movie) => (
              <S.MovieWrapper key={movie.id}>
                <Poster
                  active
                  title={movie.title}
                  poster={movie.poster}
                  type="submit"
                  approve={(e) => {
                    e.preventDefault();
                    deleteMovie(
                      movie.id,
                      auth,
                      setMovieData,
                      movieData,
                      setError
                    );
                  }}
                  redirect={(e) => {
                    e.preventDefault();
                    localStorage.setItem("selectedMovie", movie.id);
                    localStorage.setItem("selectedMovieImdb", movie.imdb_id);
                    history.push(`/collection/about/${movie.title}`);
                  }}
                />
              </S.MovieWrapper>
            ))}
        </S.Wrapper>
      </Section>
    </Hero>
  );
}

export default Collection;
