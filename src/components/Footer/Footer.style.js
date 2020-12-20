import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: ${(props) => props.theme.color.black};
  box-shadow: 0 0 3px 3px rgb(0, 0, 0, 0.5);
`;

export const H4 = styled.h4`
  margin: 0;
  color: rgb(251, 251, 251, 0.5);
  text-transform: uppercase;
`;
