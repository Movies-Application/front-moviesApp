import styled from "styled-components";

export const MovieSection = styled.article`
  margin-right: 166px;
  width: 45%;
`;

export const DescriptionBlock = styled.div`
  width: 350px;
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

export const DescriptionWrapper = styled.div``;

export const DescriptionHeader = styled.h2`
  margin-top: 0;
  color: rgb(251, 251, 251, 0.9);
`;

export const Description = styled.p`
  margin: 0;
  height: 225px;
  overflow: scroll;
  color: rgb(251, 251, 251, 0.5);
  overflow: auto;
  &&::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.black};
  }

  &&::-webkit-scrollbar {
    width: 1px;
  }

  &&::-webkit-scrollbar-thumb {
    border: 1px solid rgb(251, 251, 251, 0.1);
  }
`;

export const DetailsBlock = styled.div`
  max-width: 180px;
  position: relative;
  padding: 20px;
  transform: translate(335px, -30px);
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
