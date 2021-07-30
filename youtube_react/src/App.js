import React from "react";
import "./App.css";

import { indigo } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from "./components/NavBar";
// import NavBar from "./components/NavBar";

// import ApiContextProvider from "./context/ApiContext";
// import Main from "./components/Main";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
});

function App() {
  return (

      <ThemeProvider theme={theme}>
        <NavBar/>

      </ThemeProvider>
  );
}

export default App;
