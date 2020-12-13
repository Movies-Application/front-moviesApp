import styled from "styled-components";
import imdbLogo from "../../assets/imdb.svg";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 390px;
  background: ${(props) => props.theme.color.black};
  box-shadow: 0px 0px 7px 2px rgba(251, 251, 251, 0.2);
`;

export const Poster = styled.div`
  width: 100%;
  flex: 1;
  background: url(${(props) => props.poster});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const MovieInfo = styled.div`
  padding: 10px;
`;

export const MovieTitle = styled.h5`
  margin: 0;
  color: ${(props) => props.theme.color.white};
`;

export const Rating = styled.h5`
  position: relative;
  margin: 0;
  color: ${(props) => props.theme.color.white};
  padding: 15px 10px 0 50px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0px;
    width: 50px;
    height: 40px;
    background: url(${imdbLogo});
    background-size: 80%;
    background-repeat: no-repeat;
  }
`;
