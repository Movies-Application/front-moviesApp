import { storiesOf } from "@storybook/react";
import React from "react";
import Hexagon from "./Hexagon";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Hexagon", module).add("Hexagon", () => (
  <ThemeProvider theme={theme}>
    <Hexagon
      background={
        "https://images.unsplash.com/photo-1554382983-4316587176f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
      }
    ></Hexagon>
  </ThemeProvider>
));
