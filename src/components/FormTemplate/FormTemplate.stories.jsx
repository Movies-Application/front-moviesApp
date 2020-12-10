import { storiesOf } from "@storybook/react";
import React from "react";
import FormTemplate from "./FormTemplate";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { userData } from "../../utils/data";

storiesOf("Form", module).add("FormTemplate", () => (
  <ThemeProvider theme={theme}>
    <FormTemplate
      fields={userData}
      btnName="register"
      callback={() => alert("Hi")}
    />
  </ThemeProvider>
));
