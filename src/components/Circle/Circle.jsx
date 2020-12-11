import React from "react";
import * as S from "./Circle.style";
import { Link } from "react-router-dom";

function Circle({ image, route }) {
  return (
    <>
      <Link to={route}>
        <S.Circle image={image}></S.Circle>
      </Link>
    </>
  );
}

export default Circle;
