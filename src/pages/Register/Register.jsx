import React, { useState } from "react";
import { Hero, FormTemplate, Notification, Section } from "../../components";
import { userData } from "../../utils/data";
import heroImg from "../../assets/hero-movie.jpeg";
import * as S from "./Register.style";

function addUser(data, setError) {
  console.log(data);
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => setError(res.msg))
    .catch(() =>
      setError("oops.. something went wrong! please try again later.")
    );
}

function Register() {
  const [error, setError] = useState("");

  return (
    <>
      <Hero image={heroImg} shadow>
        <Section>
          {error && <Notification>{error}</Notification>}
          <S.SecondaryTitle>REGISTER:</S.SecondaryTitle>
          <FormTemplate
            fields={userData}
            type="submit"
            mainBtn="register"
            secBtn="don't have an account"
            callback={(fieldValues) => addUser(fieldValues, setError)}
          />
        </Section>
      </Hero>
    </>
  );
}

export default Register;
