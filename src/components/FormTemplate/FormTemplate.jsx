import React, { useState } from "react";
import { Button, InputField } from "../";
import * as S from "./FormTemplate.style";

function FormTemplate({ fields, callback, mainBtn, secBtn, type }) {
  const [fieldValues, setFieldValues] = useState({
    username: "",
    password: "",
  });

  return (
    <S.FormTemplate
      onSubmit={(e) => {
        e.preventDefault();
        callback(fieldValues);
      }}
    >
      {fields &&
        fields.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            labelText={field.labelText}
            placeholder={field.placeholder}
            handleChange={(e) =>
              setFieldValues({
                ...fieldValues,
                [field.name]: e.target.value,
              })
            }
          />
        ))}
      <S.RightWrapper>
        {/* <Button type={type} color="secondary">
          {secBtn}
        </Button> */}
        <Button type={type} color="primary">
          {mainBtn}
        </Button>
      </S.RightWrapper>
    </S.FormTemplate>
  );
}
export default FormTemplate;
