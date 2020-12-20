import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

function Button({ children, color, handleClick, type }) {
  return (
    <S.Button onClick={handleClick} type={type} color={color}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
