import React, { useState } from "react";
import { Button, InputField } from "../";
import * as S from "./FormTemplate.style";

function FormTemplate({ fields, callback, mainBtn, type }) {
  const [fieldValues, setFieldValues] = useState({
    username: "",
    password: "",
  });
  // const [select, setSelect] = useState(false);

  return (
    <S.FormTemplate
      onSubmit={(e) => {
        e.preventDefault();
        callback(fieldValues);
      }}
    >
      {fields &&
        fields.map((field) => (
          <S.InputWrapper key={field.name}>
            <InputField
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
          </S.InputWrapper>
        ))}
      {/* to Do */}
      {/* <div>
        <S.CheckboxLabel htmlFor="showPass">
          <S.Checkmark displayTick={select}></S.Checkmark>
          <S.Checkbox
            type="checkbox"
            id="showPass"
            name="showPass"
            value="showPass"
            onChange={() => setSelect(!select)}
          />
          Show password
        </S.CheckboxLabel>
      </div> */}

      <S.RightWrapper>
        <Button type={type} color="primary">
          {mainBtn}
        </Button>
      </S.RightWrapper>
    </S.FormTemplate>
  );
}

export default FormTemplate;
