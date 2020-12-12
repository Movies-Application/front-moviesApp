import React from "react";
import * as S from "./SelectOption.style";

function SelectOption({ handleChange, title, movie_id, year }) {
  return (
    <S.OptionWrapper>
      <label htmlFor={movie_id}>
        <S.Option
          type="radio"
          name="movie"
          id={movie_id}
          value={movie_id}
          onChange={handleChange}
        />
        {title} ({year})
      </label>
    </S.OptionWrapper>
  );
}

export default SelectOption;
