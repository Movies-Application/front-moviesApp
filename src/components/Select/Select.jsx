import React, { useState } from "react";
import * as S from "./Select.style";

function Select() {
  const [isOpen, setOpen] = useState(false);
  const toggling = () => setOpen(!isOpen);
  const [option, setOption] = useState("");

  return (
    <S.DropDownContainer>
      <S.DropDownHeader onClick={toggling}>
        {option || "Choose!"}
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownListContainer>
          <S.W>
            <label htmlFor="1">
              <S.ListItem
                type="radio"
                name="movie"
                id="1"
                value="mangoes"
                onChange={(e) => {
                  setOption(e.target.value);
                  setOpen(!isOpen);
                  console.log(e.target.value);
                }}
              />
              Mangoes
            </label>
          </S.W>
        </S.DropDownListContainer>
      )}
    </S.DropDownContainer>
  );
}

export default Select;
