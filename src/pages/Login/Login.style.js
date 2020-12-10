import styled from "styled-components";
import heroImg from "../../assets/hero-movie.jpeg";

export const Hero = styled.div`
  height: 100vh;
  background: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.8);
`;

export const Wrapper = styled.div`
  display: inline-block;
  padding: 5px;
`;
