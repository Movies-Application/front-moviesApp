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
`;

export const Heading = styled.h1`
  max-width: 50%;
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 3em;
`;

export const Description = styled.p`
  color: white;
`;

// export const Margin = styled.div`
//   margin-right: 20px;
// `;
