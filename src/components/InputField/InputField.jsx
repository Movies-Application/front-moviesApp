import React, { useState } from "react";
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

export default InputField;
