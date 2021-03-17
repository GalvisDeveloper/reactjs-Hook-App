import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import themes from "../constants/theme";
import { getTheme } from "../utils/getTheme";
// import CounterApp from "./useState/CounterApp";
// import CounterCustomHook from './useState/CounterCustomHook'
import SimpleForm from "./useEffect/SimpleForm";
import { Switch } from "@material-ui/core";

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  overflow: hidden;
`;

const ButtonTheme = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50px;
`;

const HookApp = () => {
  // eslint-disable-next-line
  const [themeName, setThemeName] = useState(themes.light);

  const handleChangeSwitch = () => {
      if (themeName === themes.light) {
          setThemeName(themes.dark);
      }else {
          setThemeName(themes.light);
      }
  }

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Content>
        <SimpleForm />

        <ButtonTheme>
          <span>Dark theme?</span>
          <Switch color="primary" onChange = {handleChangeSwitch} />
        </ButtonTheme>
      </Content>
    </ThemeProvider>
  );
};

export default HookApp;
