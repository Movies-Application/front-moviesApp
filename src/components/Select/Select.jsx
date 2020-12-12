import React, { useState } from "react";
import * as S from "./Select.style";

function Select({ children, selected }) {
  const [isOpen, setOpen] = useState(false);
  const toggling = () => setOpen(!isOpen);

  return (
    <S.DropDownContainer>
      <S.DropDownHeader onClick={toggling} type="radio">
        {"Your search results are ready!"}
        <S.Toggle />
      </S.DropDownHeader>
      {isOpen && <S.DropDownListContainer>{children}</S.DropDownListContainer>}
    </S.DropDownContainer>
  );
}

export default Select;
