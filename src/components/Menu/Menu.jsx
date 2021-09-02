// Core
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Switch } from "@material-ui/core";
// material-Styles
import { makeStyles } from "@material-ui/core/styles";
// Icons
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
// React
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// Css on JS
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  padding-left: 40px;
  width: 100%;
  align-items: center;
  background-color: #2980b9;
  height: 70px;
  overflow: hidden;

  .MuiSvgIcon-root {
    pointer-events: none;
  }
`;

const LogoMenu = styled.div`
  img {
    width: 100px;
  }
`;

const useStyles = makeStyles({
  root: {
    width: 500,
    borderRadius: 30,
    alignItems: "center",
  },
});

const ButtonTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const ThemeText = styled.div`
  height: 18px;
  p {
    font-weight: 400;
    line-height: 18px;
    color: white;
    font-size: calc(10px + 2vmin);
  }
`;

const SwitchContainer = styled.div`
  padding-top: 3px;
`;

// COMPONENT -------------------------------------------

export const Menu = ({ themeName, setThemeName }) => {
  const classes = useStyles();
  const [value, setValue] = useState("home");
  const history = useHistory();

  const handleChangeSwitch = () => {
    if (themeName === "light") {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
  };

  const handleChangeNavigation = (e, newValue) => {
    window.localStorage.setItem("route", e.target.innerText);
    setValue(newValue);
  };

  const handleRoute = (e) => {
    history.push(e.target.innerText);
  };

  useEffect(() => {
    const localRoute = window.localStorage.getItem("route");

    let getHistory = history.location.pathname.replace("/", "");

    if (!localRoute && getHistory === "") {
      window.localStorage.setItem("route", value);
      setValue(localRoute);
    } else if (!localRoute && getHistory !== "") {
      window.localStorage.setItem("route", getHistory);
      setValue(getHistory);
    } else {
      window.localStorage.setItem("route", getHistory);
      setValue(getHistory);
    }
  }, []);

  return (
    <Container>
      <LogoMenu>
        <Link to="/">
          <img
            src="https://www.stop-corrida.fr/wp-content/uploads/2019/08/hook-logo-1.png"
            alt="hook"
          />
        </Link>
      </LogoMenu>

      <BottomNavigation
        value={value}
        className={classes.root}
        onChange={handleChangeNavigation}
        onClick={handleRoute}
        showLabels
      >
        <BottomNavigationAction
          label="useState"
          value="useState"
          icon={<VideogameAssetIcon />}
        />

        <BottomNavigationAction
          label="useEffect"
          value="useEffect"
          icon={<HourglassFullIcon />}
        />

        <BottomNavigationAction
          label="useFetch"
          value="useFetch"
          icon={<LocationOnIcon />}
        />

        <BottomNavigationAction
          label="useRef"
          value="useRef"
          icon={<FolderIcon />}
        />

        <BottomNavigationAction
          label="useMemo"
          value="useMemo"
          icon={<FolderIcon />}
        />

        <BottomNavigationAction
          label="useCallBack"
          value="useCallBack"
          icon={<FolderIcon />}
        />
      </BottomNavigation>

      <ButtonTheme>
        <ThemeText>
          <p>Dark theme?</p>
        </ThemeText>
        <SwitchContainer>
          <Switch color="secondary" onChange={handleChangeSwitch} />
        </SwitchContainer>
      </ButtonTheme>
    </Container>
  );
};
export default Menu;
