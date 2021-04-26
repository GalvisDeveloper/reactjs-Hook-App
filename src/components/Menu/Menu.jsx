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
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Css on JS
import styled from "styled-components";
import CounterCustomHook from "../useState/CounterCustomHook";

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
  }
`;

const SwitchContainer = styled.div`
  padding-top: 3px;
`;

// COMPONENT -------------------------------------------

export const Menu = ({ themeName, setThemeName }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChangeSwitch = () => {
    if (themeName === "light") {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
  };

  const handleChangeButton = (e, newValue) => {
    setValue(newValue);
  };

  const handleRoute = (e) => {
    console.log(e);
    window.location.pathname = e.target.innerText;
  };

  return (
    <Container>
      <LogoMenu>
        <img
          src="https://www.stop-corrida.fr/wp-content/uploads/2019/08/hook-logo-1.png"
          alt="hook"
        />
      </LogoMenu>

      <BottomNavigation
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        className={classes.root}
        onClick={handleRoute}
        showLabels
      >
        {/* <Link to="/useState"> */}
        <BottomNavigationAction
          label="UseState"
          value="state"
          icon={<VideogameAssetIcon />}
        />
        {/* </Link> */}

        {/* <Link to="/useEffect"> */}
        <BottomNavigationAction
          label="UseEffect"
          value="effect"
          icon={<HourglassFullIcon />}
        />
        {/* </Link> */}

        {/* <Link to="/useFetch"> */}
        <BottomNavigationAction
          label="UseFetch"
          value="fetch"
          icon={<LocationOnIcon />}
        />
        {/* </Link> */}

        {/* <Link to="/useRef"> */}
        <BottomNavigationAction
          label="UseRef"
          value="ref"
          icon={<FolderIcon />}
        />
        {/* </Link> */}

        {/* <Link to="/useMemo"> */}
        <BottomNavigationAction
          label="UseMemo"
          value="memo"
          icon={<FolderIcon />}
        />
        {/* </Link> */}

        {/* <Link to="/useCallBack"> */}
        <BottomNavigationAction
          label="UseCallBack"
          value="callBack"
          icon={<FolderIcon />}
        />
        {/* </Link> */}
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
