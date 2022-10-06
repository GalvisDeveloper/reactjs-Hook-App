import React, { useEffect, useState } from "react";
// import SimpleForm from "./UseEffect/SimpleForm";
// import CounterApp from "./UseState/CounterApp";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch
} from "react-router-dom";

import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import FormWithCustomHook from "./UseEffect/FormWithCustomHook";
import MultipleCustomHooks from "./UseFetch/MultipleCustomHooks";
import CounterCustomHook from "./UseState/CounterCustomHook";

import styled, { ThemeProvider } from "styled-components";
import themes from "../constants/theme";
import { getTheme } from "../utils/getTheme";
import UseCallBack from "./UseCallBack/UseCallBack";
import Layout from "./UseLayoutEffect/Layout";
import Memorize from "./UseMemo/Memorize";
import FocusScreen from "./UseRef/FocusScreen";
import MenuNav from "./Menu/MenuNav";

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

const initialTheme = {
  isDark: false,
  name: themes.light
};

const HookApp = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(initialTheme);

  const { isDark } = theme;

  const changeTheme = () => {
    if (isDark) {
      setTheme({ isDark: false, name: themes.light });
      localStorage.setItem("isDark", false);
      console.log("Light --- ");
      // console.log(isDark);
    } else {
      setTheme({ isDark: true, name: themes.dark });
      localStorage.setItem("isDark", true);
      console.log("Dark --- ");
      // console.log(isDark);
    }
  };

  useEffect(() => {
    let themeValue = localStorage.getItem("isDark");

    if (!themeValue) {
      setTheme(initialTheme);
    } else if (themeValue && themeValue === "true") {
      setTheme({ isDark: true, name: themes.dark });
      localStorage.setItem("isDark", true);
    } else if (themeValue && themeValue === "false") {
      setTheme({ isDark: false, name: themes.light })
      localStorage.setItem("isDark", false);
    }
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme.name)}>
      <Content>
        <Router>
          <MenuNav theme={theme.name} changeTheme={changeTheme} isDark={isDark} />

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
              <Route
                exact
                path="/useRef"
                component={() => <FocusScreen />}
              />
              <Route
                exact
                path="/useLayoutEffect"
                component={() => <Layout />}
              />
              <Route
                exact
                path="/useMemo"
                component={() => <Memorize />}
              />
              <Route
                exact
                path="/useCallBack"
                component={() => <UseCallBack />}
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
