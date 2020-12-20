import styled from "styled-components";

export const StyledSection = styled.div`
  width: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    position: absolute;
    color: ${(props) => props.theme.color.white};
  }
  &::before {
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    border-top: 1px solid ${(props) => props.theme.color.white};
    border-left: 1px solid ${(props) => props.theme.color.white};
  }
  &::after {
    right: 0;
    bottom: 0;
    width: 25%;
    height: 50%;
    border-right: 1px solid ${(props) => props.theme.color.white};
    border-bottom: 1px solid ${(props) => props.theme.color.white};
  }
  background-color: rgb(0, 0, 0, 0.3);
  box-shadow: 0px 1px 3px 3px rgb(0, 0, 0, 0.4);
`;

export const Heading = styled.h1`
  max-width: 80%;
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 2.3em;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 2em;
  }

  @media (max-width: 450px) {
    width: 100%;
    font-size: 1.3em;
  }
`;

export const Description = styled.p`
  width: 80%;
  color: rgb(251, 251, 251, 0.6);
`;
