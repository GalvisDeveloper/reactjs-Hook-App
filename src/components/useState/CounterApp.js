import React from "react";
import styled from "styled-components";

// ----------------------------------------------------------

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
  border: 2px solid ${(props) => props.theme.button};
`;

const Title = styled.div`
  font-size: 3em;
  font-family: fantasy;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

const CustomFragment = styled.div`
  padding: 70px;
`;

const Number = styled.h1`
  font-size: 1em;
  color: ${(props) => props.theme.active};
`;

const CounterApp = () => {
  return (
    <CustomFragment>
      <Title>
        Counter <Number> {0} </Number>
      </Title>
      <hr />

      <Button>-1</Button>
      <Button>Reset Counter</Button>
      <Button>+1</Button>
    </CustomFragment>
  );
};

export default CounterApp;
