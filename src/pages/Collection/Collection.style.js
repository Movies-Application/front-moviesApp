import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  &&:not(:nth-child(3n)) {
    margin-right: 20px;
  }
  &&:last-child {
    margin-right: 0;
  }
  margin-bottom: 20px;
  min-width: calc(33% - 20px);

  @media (max-width: 785px) {
    &&:not(:nth-child(3n)) {
      margin-right: 0;
    }
    &&:not(:nth-child(2n)) {
      margin-right: 20px;
    }
  }

  @media (max-width: 515px) {
    &&:not(:nth-child(2n)) {
      margin-right: 0px;
    }
  }
`;
