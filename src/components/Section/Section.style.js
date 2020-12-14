import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.background};
  color: ${(props) => props.theme.color.white};
  padding: 0 1em;
  box-sizing: border-box;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: 30px 20px;
  box-sizing: border-box;
`;
