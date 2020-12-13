import styled from "styled-components";

export const MovieSection = styled.article`
  margin-right: 140px;
  width: 45%;
`;

export const DescriptionBlock = styled.div`
  width: 400px;
  max-height: 230px; //
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  &::before,
  &::after {
    content: "";
    position: absolute;
    color: ${(props) => props.theme.color.white};
  }
  &::before {
    top: 0;
    left: 0;
    width: 30%;
    height: 80%;
    border-top: 1px solid ${(props) => props.theme.color.white};
    border-left: 1px solid ${(props) => props.theme.color.white};
  }
  &::after {
    right: 0;
    bottom: 0;
    width: 45%;
    height: 50%;
    border-right: 1px solid ${(props) => props.theme.color.white};
    border-bottom: 1px solid ${(props) => props.theme.color.white};
  }
`;

export const DescriptionWrapper = styled.div`
  max-height: 230px;
`;

export const DescriptionHeader = styled.h2`
  margin-top: 0;
  color: rgb(251, 251, 251, 0.9);
`;

export const Description = styled.p`
  margin: 0;
  padding-bottom: 1px;
  height: 100%;
  overflow: scroll;
  color: rgb(251, 251, 251, 0.5);
  overflow: auto;
  &&::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.black};
  }

  &&::-webkit-scrollbar {
    /* display: none; */
    width: 1px;
    height: 5px;
    /* &:hover {
      display: block;
      width: 1px;
    } */
  }

  &&::-webkit-scrollbar-thumb {
    border: 1px solid rgb(251, 251, 251, 0.1);
  }
`;

export const DetailsBlock = styled.div`
  width: 180px;
  position: relative;
  padding: 20px;
  transform: translate(310px, -15px);
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    position: absolute;
    color: ${(props) => props.theme.color.white};
  }
  &::before {
    top: 0;
    left: 0;
    width: 65%;
    height: 100%;
    border-top: 1px solid ${(props) => props.theme.color.white};
    border-left: 1px solid ${(props) => props.theme.color.white};
  }
  &::after {
    right: 0;
    bottom: 0;
    width: 25%;
    height: 50%;
    border-right: 1px solid ${(props) => props.theme.color.white};
    border-bottom: 1px solid ${(props) => props.theme.color.white};
  }
`;

export const DetailsBlock2 = styled.div`
  width: 180px;
  position: relative;
  padding: 20px;
  transform: translate(140px, -100px);
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    position: absolute;
    color: ${(props) => props.theme.color.white};
  }
  &::before {
    bottom: 0;
    left: 0;
    width: 30%;
    height: 75%;
    border-left: 1px solid ${(props) => props.theme.color.white};
    border-bottom: 1px solid ${(props) => props.theme.color.white};
  }
  &::after {
    top: 0;
    right: 0;
    width: 35%;
    height: 65%;
    border-top: 1px solid ${(props) => props.theme.color.white};
    border-right: 1px solid ${(props) => props.theme.color.white};
  }
`;

export const DetailsHeader = styled.h5`
  text-align: center;
  margin: 5px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  color: rgb(251, 251, 251, 0.9);
`;

export const CustomText = styled.span`
  color: rgb(251, 251, 251, 0.5);
`;
