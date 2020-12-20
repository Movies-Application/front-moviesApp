import React from "react";
import PropTypes from "prop-types";
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

Circle.propTypes = {
  image: PropTypes.string,
  route: PropTypes.string,
};

export default Circle;
