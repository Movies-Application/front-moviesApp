import React from "react";
import * as S from "./Hexagon.style";

function Hexagon({ image, size }) {
  return (
    <S.Hexagon size={size}>
      <S.HexagonIns>
        <S.HexagonImg background={image} />
      </S.HexagonIns>
    </S.Hexagon>
  );
}

export default Hexagon;
