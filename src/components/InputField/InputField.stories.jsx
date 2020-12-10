import { storiesOf } from "@storybook/react";
import React from "react";
import InputField from "./InputField";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Input", module).add("Text Field", () => (
  <ThemeProvider theme={theme}>
    <InputField
      type="text"
      name="name"
      labelText="name"
      placeholder="Name"
      onChange={() => console.log("Hi")}
    />
  </ThemeProvider>
));
