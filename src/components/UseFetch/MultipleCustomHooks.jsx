import React from "react";
import { DualRing } from "react-awesome-spinners";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import styled from "styled-components";

const Title = styled.div`
  font-size: ${(props) => props.size}em;
  font-family: fantasy;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

const CustomFragment = styled.div`
  padding: 70px;

  .actions {
    display: block;
    text-align: center;
  }
`;

const BlockQuote = styled.blockquote`
  p {
    margin-bottom: 0;
  }

  footer {
    display: block;
    font-size: 80%;
    color: ${(props) => props.theme.color};

    &::before {
      content: "--- ";
    }
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

const MultipleCustomHooks = () => {
  let { counter, increment, resetCounter } = useCounter(1);

  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${
      counter > 30 ? resetCounter() : counter
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
          <BlockQuote>
            <p>
              <strong>{quote}</strong>
            </p>
            <footer>{author}</footer>
          </BlockQuote>
        )}

        <Button onClick={() => increment(1)}>Next Quote</Button>
      </CustomFragment>
    </CustomFragment>
  );
};

export default MultipleCustomHooks;
