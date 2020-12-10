import styled from "styled-components";

export const Hexagon = styled.div`
  display: inline-block;
  width: ${(props) => (props.size === "small" ? "160px" : "200px")};
  height: 200px;
  transform: rotate(-60deg);
  overflow: hidden;
  visibility: hidden;
`;

export const HexagonIns = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(120deg);
  overflow: hidden;
`;

export const HexagonImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: 100% 100%;
  transform: rotate(-60deg);
  visibility: visible;
`;
