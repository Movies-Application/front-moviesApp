import styled from "styled-components";
import searchIcon from "../../assets/search-icon.svg";

export const SearchBar = styled.div``;

export const SearchSectionBorder = styled.div`
  border: 1px solid rgb(251, 251, 251, 0.5);
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchButton = styled.button`
  width: 10%;
  background: url(${searchIcon});
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-size: 27px;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PaddingLeftWrapper = styled.div`
  padding-left: 20px;
  @media (max-width: 780px) {
    padding-top: 20px;
    padding-left: 0;
  }
`;

export const SecondaryTitle = styled.h2`
  font-size: 2em;
`;

export const TopMarginWrapper = styled.div`
  margin-top: 20px;
`;

export const ButtonBlock = styled.div`
  width: auto;
  max-height: 10%;
  display: flex;
  justify-content: flex-start;
  bottom: 0;
`;

export const ButtonSubmit = styled.form`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
