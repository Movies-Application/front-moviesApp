import styled from "styled-components";

export const Circle = styled.div`
  color: white;
  width: 70px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: 50px;
  background: ${(props) => props.image && `url(${props.image})`};
  background-position: center;
  background-size: 35%;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
  transition: 2s;
  box-sizing: border-box;
  && {
    animation: blink 4s infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  &&:hover {
    animation-fill-mode: none;
    border-style: hidden;
    opacity: 1;
  }
`;

export const H = styled.h6`
  opacity: ${(props) => (props.displayname ? "1" : "0")};
`;
