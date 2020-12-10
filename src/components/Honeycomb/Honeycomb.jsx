import React from "react";
import * as S from "./Honeycomb.style";
import { Hexagon } from "../";

function Honeycomb() {
  return (
    <S.Grid>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
      <S.Diagonal>
        <Hexagon />
      </S.Diagonal>
    </S.Grid>
  );
}

export default Honeycomb;
