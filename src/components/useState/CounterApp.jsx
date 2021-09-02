import React, { useState } from "react";
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

// -------------------------------------------------------

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  const { counter1, counter2 } = state;

  return (
    <CustomFragment>
      <Title>
        Counter1 <Number> {counter1} </Number>
      </Title>

      <Title>
        Counter2 <Number> {counter2} </Number>
      </Title>

      <hr />

      {/* <Button onClick={() => setCounter(counter - 1)}>-1</Button>
      <Button onClick={() => setCounter(0)}>Reset Counter</Button> */}
      <Button onClick={() => setState({...state, counter1: counter1 + 1 })}>+1</Button>
    </CustomFragment>
  );
};

export default CounterApp;
