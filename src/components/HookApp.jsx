import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import themes from "../constants/theme";
import { getTheme } from "../utils/getTheme";
import Menu from "./Menu/Menu";
// import SimpleForm from "./UseEffect/SimpleForm";
// import CounterApp from "./UseState/CounterApp";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import CounterCustomHook from "./UseState/CounterCustomHook";
import FormWithCustomHook from "./UseEffect/FormWithCustomHook";
import MultipleCustomHooks from "./Example/MultipleCustomHooks";

const Content = styled.div`
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  min-height: 90vh;
  justify-content: center;
  align-items: center;
`;

const HookApp = () => {
  // eslint-disable-next-line
  const [themeName, setThemeName] = useState(themes.light);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Content>
        <Router>
          <Menu themeName={themeName} setThemeName={setThemeName} />

          {/* <Redirect from="/" to="/home" /> */}
          <Container>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route
                exact
                path="/useState"
                component={() => <CounterCustomHook />}
              />
              <Route
                exact
                path="/useEffect"
                component={() => <FormWithCustomHook />}
              />
              <Route
                exact
                path="/useFetch"
                component={() => <MultipleCustomHooks />}
              />
              <Route exact component={() => <NotFound />} />
            </Switch>
          </Container>
        </Router>
      </Content>
    </ThemeProvider>
  );
};

export default HookApp;
