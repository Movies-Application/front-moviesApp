import styled from "styled-components";

export const Hero = styled.div`
  min-height: ${(props) => (props.size === "cover" ? "100%" : "100vh")};
  min-height: 100vh;
  margin-top: -182px;
  padding-top: 182px;
  padding-top: 182px;
  min-height: calc(100vh - 80px);
  background: ${(props) => props.image && `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: ${(props) =>
    props.shadow ? "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)" : "none"};
  box-sizing: border-box;
`;
