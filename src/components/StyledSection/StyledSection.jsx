import React from "react";
import * as S from "./StyledSection.style";

function StyledSection({ children, description, pageTitle }) {
  return (
    <S.StyledSection>
      <S.Heading>{pageTitle}</S.Heading>
      <S.Description>{description}</S.Description>
      {children}
    </S.StyledSection>
  );
}

export default StyledSection;
