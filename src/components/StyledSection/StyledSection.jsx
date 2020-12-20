import React from "react";
import PropTypes from "prop-types";
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

StyledSection.propTypes = {
  children: PropTypes.string,
  description: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default StyledSection;
