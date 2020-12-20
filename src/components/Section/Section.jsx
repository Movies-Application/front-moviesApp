import React from "react";
import PropTypes from "prop-types";
import * as S from "./Section.style";

function Section({ children, fullWidth, background }) {
  return (
    <S.Section background={background}>
      {!fullWidth && <S.Container>{children}</S.Container>}
      {fullWidth && children}
    </S.Section>
  );
}

Section.propTypes = {
  children: PropTypes.string,
  fullWidth: PropTypes.bool,
  background: PropTypes.string,
};

export default Section;
