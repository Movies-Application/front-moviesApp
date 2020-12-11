import React from "react";
import * as S from "./Hero.style";

function Hero({ children, image, shadow }) {
  return (
    <S.Hero image={image} shadow={shadow}>
      {children}
    </S.Hero>
  );
}

export default Hero;
