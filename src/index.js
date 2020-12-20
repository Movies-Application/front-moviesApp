import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import AuthProvider from "./context/AuthContext";
import "normalize.css";
import theme from "./theme";
require("dotenv").config();

const GlobalStyle = createGlobalStyle`
  * {
  font-family: "Thasadith", sans-serif;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
