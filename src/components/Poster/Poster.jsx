import React, { useState } from "react";
import * as S from "./Poster.style";
import { DeleteBox } from "../";

function Poster({ poster, approve, type, active, nono, title }) {
  const [display, setDisplay] = useState(false);
  const [visibility, setVisibility] = useState("none");

  return (
    <>
      <DeleteBox
        title={title}
        visibility={visibility}
        decline={(e) => {
          e.preventDefault();
          setVisibility("none");
        }}
        approve={approve}
      ></DeleteBox>
      <S.Poster
        onMouseOver={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
        poster={poster}
        displayShadow={display}
        active={active}
      >
        <S.IconWrapper displayLink={display} active={active}>
          <S.StyledLink onClick={nono} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <S.DeleteButton
              onClick={() => {
                setVisibility("true");
              }}
              type={type}
            />
          </form>
        </S.IconWrapper>
      </S.Poster>
    </>
  );
}

export default Poster;
