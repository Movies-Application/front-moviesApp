import React, { useState } from "react";
import PropTypes from "prop-types";
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <S.StyledLink onClick={redirect} />
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

Poster.propTypes = {
  poster: PropTypes.string,
  approve: PropTypes.func,
  type: PropTypes.string,
  active: PropTypes.bool,
  redirect: PropTypes.func,
  title: PropTypes.string,
};

export default Poster;
