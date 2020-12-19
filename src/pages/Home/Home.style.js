import styled from "styled-components";

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
  box-sizing: border-box;

  @media (max-width: 390px) {
    justify-content: center;
  }
`;

export const MarginWrapper = styled.div`
  margin: 0 10px 0;
`;
