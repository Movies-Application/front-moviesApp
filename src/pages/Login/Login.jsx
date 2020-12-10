import React, { useState, useContext } from "react";
import { Header, FormTemplate, Section } from "../../components";
import { userData } from "../../utils/data";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as S from "./Login.style";

function login(data, setError, history, auth) {
  console.log(data);
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        auth.updateToken(data.token);
        history.push("/");
      } else {
        return setError(data.msg || "Error");
      }
    })
    .catch((error) => setError(error.message));
}

function Login() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [error, setError] = useState("");

  return (
    <>
      {error}
      <S.Hero>
        <Header />
        <Section>
          <FormTemplate
            fields={userData}
            type="submit"
            mainBtn="login"
            secBtn="don't have an account"
            callback={(fieldValues) =>
              login(fieldValues, setError, history, auth)
            }
          />
        </Section>
      </S.Hero>
    </>
  );
}

export default Login;
