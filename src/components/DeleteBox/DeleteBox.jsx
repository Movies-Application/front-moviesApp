import React from "react";
import * as S from "./DeleteBox.style";
import { Button } from "../";

function DeleteBox({ title, approve, decline, visibility }) {
  return (
    <S.DeleteBox visibility={visibility}>
      <S.H4>
        Delete <S.StyledTitle>"{title}"</S.StyledTitle> from collection?
      </S.H4>
      <S.ButtonBlock>
        <S.ButtonWrapper onSubmit={(e) => e.preventDefault()}>
          <Button color="primary" handleClick={decline}>
            cancel
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper onSubmit={(e) => e.preventDefault()}>
          <Button color="secondary" handleClick={approve}>
            delete
          </Button>
        </S.ButtonWrapper>
      </S.ButtonBlock>
    </S.DeleteBox>
  );
}

export default DeleteBox;
