import React from "react";
import { Header, FormTemplate, Section } from "../../components";
import { userData } from "../../utils/data";
import * as S from "./Login.style";

function Login() {
  return (
    <>
      <S.Hero>
        <Header />
        <Section>
          <FormTemplate
            fields={userData}
            type="submit"
            mainBtn="login"
            secBtn="don't have an account"
            callback={() => alert("Yay")}
          />
        </Section>
      </S.Hero>
    </>
  );
}

export default Login;
