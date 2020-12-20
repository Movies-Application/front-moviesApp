import React from "react";
import * as S from "./Hero.style";

function Hero({ children, image, shadow, size }) {
  return (
    <S.Hero image={image} size={size} shadow={shadow}>
      {children}
    </S.Hero>
  );
}

export default Hero;
