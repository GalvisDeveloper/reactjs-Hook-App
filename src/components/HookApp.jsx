import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import themes from "../constants/theme";
import { getTheme } from "../utils/getTheme";
import { Menu } from "./Menu/Menu";
import CounterCustomHook from "./useState/CounterCustomHook";
import SimpleForm from "./useEffect/SimpleForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";

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
          <Container>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route
                exact
                path="/UseState"
                component={() => <CounterCustomHook />}
              />
              <Route exact path="/UseEffect" component={() => <SimpleForm />} />
              <Route exact component={() => <NotFound />} />
            </Switch>
          </Container>
        </Router>
      </Content>
    </ThemeProvider>
  );
};

export default HookApp;
