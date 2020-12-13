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
  justify-content: space-between;
  width: 100%;
`;

export const PaddingLeftWrapper = styled.div`
  padding-left: 20px;
`;
