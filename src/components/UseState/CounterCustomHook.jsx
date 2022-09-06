import React from "react";
import styled from "styled-components";
import { useCounter } from "../../hooks/useCounter";

// --------------------------------------

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
  font-size: ${(props) => props.size}em;
  font-family: fantasy;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

const CustomFragment = styled.div`
  padding: 70px;

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Number = styled.h1`
  font-size: 1em;
  color: ${(props) => props.theme.active};
`;

// --------------------------------------
const CounterCustomHook = () => {
  const { counter, increment, decrement, resetCounter } = useCounter(0);

  return (
    <CustomFragment>
      <Title size={3}>
        {" "}
        Counter with Hook: <Number> {counter} </Number>
      </Title>

      <hr />
      <CustomFragment className="actions">
        <Button onClick={() => decrement(1)}> - 1 </Button>
        <Button onClick={resetCounter}> Reset </Button>
        <Button onClick={() => increment(1)}> + 1 </Button>
      </CustomFragment>
    </CustomFragment>
  );
};

export default CounterCustomHook;
