import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.style";

function Hero({ children, image, shadow, size }) {
  return (
    <S.Hero image={image} size={size} shadow={shadow}>
      {children}
    </S.Hero>
  );
}

Hero.propTypes = {
  children: PropTypes.string,
  image: PropTypes.string,
  shadow: PropTypes.bool,
  size: PropTypes.string,
};

export default Hero;
