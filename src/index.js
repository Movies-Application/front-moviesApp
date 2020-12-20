import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import AuthProvider from "./context/AuthContext";
import "normalize.css";
import theme from "./theme";
require("dotenv").config();

const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Thasadith", sans-serif;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
