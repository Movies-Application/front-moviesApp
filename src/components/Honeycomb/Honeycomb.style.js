import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* & div:nth-child(4n) {
    transform: translate(105px, -60px);
  }
  & div:nth-child(5n) {
    transform: translate(105px, -60px);
  } */

  & div:nth-child(n + 4):nth-child(-n + 6) {
    transform: translate(105px, -60px);
  }
`;

export const Diagonal = styled.div`
  padding: 5px;
`;
