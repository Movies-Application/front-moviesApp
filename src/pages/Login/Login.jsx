import React, { useState, useContext } from "react";
import { Hero, FormTemplate, Notification, Section } from "../../components";
import { userData } from "../../utils/data";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import heroImg from "../../assets/hero-movie.jpeg";
import * as S from "./Login.style";

function login(data, setError, auth, history) {
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
        // eslint-disable-next-line
        return auth.updateToken(data.token), history.push("/");
      } else {
        setError(data.msg);
      }
    })
    .catch(() =>
      setError("oops.. something went wrong! please try again later.")
    );
}

function Login() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [error, setError] = useState("");

  return (
    <>
      <Hero image={heroImg} shadow>
        <Section>
          {error && <Notification>{error}</Notification>}
          <S.SecondaryTitle>LOGIN:</S.SecondaryTitle>
          <FormTemplate
            fields={userData}
            type="submit"
            mainBtn="login"
            secBtn="don't have an account"
            callback={(fieldValues) =>
              login(fieldValues, setError, auth, history)
            }
          />
        </Section>
      </Hero>
    </>
  );
}

export default Login;
