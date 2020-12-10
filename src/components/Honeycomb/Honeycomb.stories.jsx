import { storiesOf } from "@storybook/react";
import React from "react";
import Honeycomb from "./Honeycomb";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Honeycomb", module).add("Honeycomb", () => (
  <ThemeProvider theme={theme}>
    <Honeycomb></Honeycomb>
  </ThemeProvider>
));
