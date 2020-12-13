import styled from "styled-components";

export const Hero = styled.div`
  height: ${(props) => (props.size === "small" ? "80vh" : "100vh")};
  margin-top: -182px;
  padding-top: 182px;
  background: ${(props) => props.image && `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: ${(props) =>
    props.shadow ? "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)" : "none"};
  box-sizing: border-box;
`;
