import styled from "styled-components";

export const MovieWrapper = styled.div`
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MarginLeft = styled.div`
  margin-left: 20px;
  @media (max-width: 780px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;
