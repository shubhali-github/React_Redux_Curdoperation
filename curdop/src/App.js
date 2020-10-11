import React from "react";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import "./App.css";
import Company from "./components/company";
import { Container, AppBar, Typography } from "@material-ui/core";
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
              <Typography variant="h2" align="center">
                    Company Data
              </Typography>
          </AppBar>
        <Company />
      </Container>
    </Provider>
  );
}

export default App;
