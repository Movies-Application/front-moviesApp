import React, { useState } from "react";
import PropTypes from "prop-types";
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

SelectOption.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  movie_id: PropTypes.string,
  year: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default SelectOption;
