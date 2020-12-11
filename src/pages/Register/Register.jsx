import React, { useState } from "react";
import { Hero, FormTemplate, Section } from "../../components";
import { userData } from "../../utils/data";
import heroImg from "../../assets/hero-movie.jpeg";

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
    .catch((error) => setError(error.message));
}

function Register() {
  const [error, setError] = useState("");

  return (
    <>
      {error}
      <Hero image={heroImg} shadow>
        <Section>
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
