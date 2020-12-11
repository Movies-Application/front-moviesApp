import styled from "styled-components";
import heroImg from "../../assets/blury-lights2.jpeg";
import { Hero } from "../../components";

// export const Hero = styled.div`
//   height: 100vh;
//   background-image: url(${heroImg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
// `;

export const FlexWrapper = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
export const StyledHero = styled(Hero)`
  background-image: url(${heroImg});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
`;
