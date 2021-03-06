import React, { useState } from "react";
import * as S from "./Poster.style";
import { DeleteBox } from "../";

function Poster({ poster, approve, type, active, redirect, title }) {
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
      />
      <S.Poster
        onMouseOver={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
        displayShadow={display}
        active={active}
        poster={poster}
      >
        <S.IconWrapper displayLink={display} active={active}>
          <form>
            <S.StyledLink onClick={redirect} type={type} />
            <S.DeleteButton
              onClick={(e) => {
                e.preventDefault();
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
