import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  :not(:nth-child(3n)) {
    margin-right: 20px;
  }
  margin-bottom: 20px;
  width: calc(33% - 20px);
`;
