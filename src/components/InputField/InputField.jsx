import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./InputField.style";

function InputField({
  handleChange,
  placeholder,
  labelText,
  type,
  name,
  label,
  custom,
}) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <S.Label htmlFor={name} displayItem={display} label={label}>
        {labelText}
      </S.Label>
      <S.Input
        type={type}
        id={name}
        custom={custom}
        placeholder={placeholder}
        displayItem={display}
        onFocus={() => setDisplay(true)}
        onBlur={() => setDisplay(false)}
        onChange={handleChange}
      />
    </>
  );
}

InputField.propTypes = {
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  custom: PropTypes.string,
};

export default InputField;
