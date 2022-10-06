import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  outline: none;
  width: auto;
  background-color: #2980b9;

  a {
    text-decoration: none;
    color: white;
  }
`;

const NotFound = () => {
  return (
    <div>
      <h1>404-Not Found 😢</h1>
      <Button>
        <Link to="/" onClick={() => localStorage.setItem("route", "home")}>VOLVER A INICIO</Link>
      </Button>
    </div>
  );
};

export default NotFound;
