import React from "react";
import { DualRing } from "react-awesome-spinners";

import { useFetch, useCounter } from "../../hooks";

import styled from "styled-components";
import { errorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Title } from "../../styles/General";
import BlockQuote from "../UseFetch/BlockQuote";


const CustomFragment = styled.div`
  padding: 70px;

  .actions {
    display: block;
    text-align: center;
  }
`;

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.button};
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme.buttonText};
  display: flex;
  font-size: 20px;
  justify-content: center;
  margin: auto;
  outline: none;
  width: auto;
`;

const ButtonGroup = styled.div`
  display:flex;
  /* margin: auto; */
  padding-right: 10px;
`

const Layout = () => {
  let { counter, increment, decrement, resetCounter } = useCounter(1);

  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter > 30 ? resetCounter() : counter
    }`
  );

  const { author, quote } = !!data && data[0];

  return (
    <CustomFragment>
      <Title size={3}>Breaking Bad Quotes</Title>
      <hr />

      <CustomFragment className="actions">
        {loading ? (
          <DualRing />
        ) : (
          <BlockQuote quote={quote} author={author} />
        )}
        <ButtonGroup>
          {counter > 1 &&
            <Button onClick={() => decrement(1)} disabled={counter === 1} >Previous Quote</Button>
          }
          <Button onClick={() => increment(1)}>Next Quote</Button>
        </ButtonGroup>
      </CustomFragment>
    </CustomFragment>
  );
};

export default Layout;
