import styled from "styled-components";

export const MovieSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 700px;
  padding-top: ${(props) => (props.noButton ? "0" : "20px")};
  position: relative;

  @media (max-width: 780px) {
    max-height: 460px;
  }
`;

export const DescriptionBlock = styled.div`
  max-width: 700px;
  position: relative;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.5);

  &::before,
  &::after {
    content: "";
    position: absolute;
    color: ${(props) => props.theme.color.white};
  }
  &::before {
    top: 0;
    left: 0;
    width: 33%;
    height: 80%;
    border-top: 1px solid ${(props) => props.theme.color.white};
    border-left: 1px solid ${(props) => props.theme.color.white};
    @media (max-width: 780px) {
      height: 99%;
    }
  }
  &::after {
    right: 0;
    bottom: 0;
    width: 45%;
    height: 50%;
    border-right: 1px solid ${(props) => props.theme.color.white};
    border-bottom: 1px solid ${(props) => props.theme.color.white};
    @media (max-width: 780px) {
      width: 100%;
    }
  }
`;

export const DescriptionWrapper = styled.div``;

export const MovieTitle = styled.h2`
  margin-top: ${(props) => (props.noButton ? "0" : "20px")};
  margin-bottom: 5px;
  color: rgb(251, 251, 251, 0.9);
`;

export const DescriptionHeader = styled.h5`
  margin-top: 10px;
  color: rgb(251, 251, 251, 0.9);
`;

export const Description = styled.p`
  margin: 0;
  padding-bottom: 1px;
  overflow: scroll;
  color: rgb(251, 251, 251, 0.5);
  overflow: auto;
  box-sizing: border-box;
`;

export const DetailsWrapper = styled.div`
  padding-top: 20px;
  text-align: left;
`;

export const DetailsHeader = styled.h5`
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

export const ButtonBlock = styled.div`
  display: ${(props) => (props.noButton ? "none" : "flex")};
  width: 100%;
  max-height: 10%;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 0;
`;

export const ButtonSubmit = styled.form`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
