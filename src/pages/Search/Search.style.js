import styled from "styled-components";
import searchIcon from "../../assets/search-icon.svg";

export const SearchBar = styled.div``;

export const SearchWrapper = styled.form`
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
  border-bottom: 1px solid rgb(251, 251, 251);
  cursor: pointer;
  outline: none;
  &:hover {
    background-size: 27px;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const MovieDetailsWrapper = styled.div`
  margin-left: 20px;
  color: rgba(251, 251, 251, 0.5);
`;

export const SecondaryHeading = styled.h2`
  color: rgba(251, 251, 251);
`;

export const MovieDescription = styled.div`
  margin-left: 20px;
  color: rgba(251, 251, 251, 0.5);
`;
