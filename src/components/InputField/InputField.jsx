import React, { useState } from "react";
import * as S from "./InputField.style";

function InputField({
  handleChange,
  placeholder,
  labelText,
  type,
  name,
  label,
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
