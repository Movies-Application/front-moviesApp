import styled from "styled-components";
import heroImg from "../../assets/red-seats.jpeg";

export const Hero = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FlexWrapper = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
