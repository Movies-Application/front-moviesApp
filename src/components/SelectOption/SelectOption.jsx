import React, { useState } from "react";
import * as S from "./SelectOption.style";

function SelectOption({ handleChange, title, movie_id, year, onClick, type }) {
  const [display, setDisplay] = useState(false);

  return (
    <S.SelectOption
      onClick={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <S.OptionWrapper>
        <S.Label htmlFor={movie_id}>
          <S.Option
            type="radio"
            name="movie"
            id={movie_id}
            value={movie_id}
            onChange={handleChange}
          />
          {title} {year}
        </S.Label>
      </S.OptionWrapper>
      <S.AboutButton
        type="submit"
        displayButton={display}
        btnType={type}
        onSubmit={onClick}
      />
    </S.SelectOption>
  );
}

export default SelectOption;
