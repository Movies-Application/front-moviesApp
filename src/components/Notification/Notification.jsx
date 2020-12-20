import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.style";

function Notification({ children }) {
  const [display, setDisplay] = useState(true);

  return (
    <S.Notification displaySelf={display}>
      <S.Message>{children}</S.Message>
      <S.CloseButton onClick={() => setDisplay(false)} />
    </S.Notification>
  );
}

Notification.propTypes = {
  children: PropTypes.string,
};

export default Notification;
