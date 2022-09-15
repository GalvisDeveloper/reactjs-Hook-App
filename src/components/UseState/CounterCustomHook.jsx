import React from "react";
import styled from "styled-components";
import { useCounter } from "../../hooks/useCounter";
import { Button, Number } from "../../styles/General";

// --------------------------------------

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
