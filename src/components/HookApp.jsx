import React, { useEffect, useState } from "react";
// import SimpleForm from "./UseEffect/SimpleForm";
// import CounterApp from "./UseState/CounterApp";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch
} from "react-router-dom";

import Menu from "./Menu/Menu";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import CounterCustomHook from "./UseState/CounterCustomHook";
import FormWithCustomHook from "./UseEffect/FormWithCustomHook";
import MultipleCustomHooks from "./UseFetch/MultipleCustomHooks";

import themes from "../constants/theme";
import { getTheme } from "../utils/getTheme";
import styled, { ThemeProvider } from "styled-components";
import FocusScreen from "./UseRef/FocusScreen";
import UseMemo from "./UseMemo/UseMemo";
import UseCallBack from "./UseCallBack/UseCallBack";
import Layout from "./UseLayoutEffect/Layout";

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

  // useEffect(() => {
  //   if (localStorage.route && (localStorage.ruote === "" || localStorage.route === "/")) {
  //     localStorage.setItem("route", "home");
  //   }
  // }, [])

  // useEffect(() => {
  // let preferColor = "light";
  // // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  // if (localStorage.getItem("isDark") === null) {
  //   preferColor = "dark";
  //   const darkPref = window.matchMedia(
  //     `(prefers-color-scheme: ${preferColor})`
  //   );
  //   localStorage.setItem("isDark", darkPref.matches);
  //   localStorage.setItem("theme", preferColor);
  // }
  // console.log(theme);
  // });

  return (
    <ThemeProvider theme={getTheme(theme.name)}>
      <Content>
        <Router>
          <Menu theme={theme.name} changeTheme={changeTheme} />

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
                component={() => <UseMemo />}
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
