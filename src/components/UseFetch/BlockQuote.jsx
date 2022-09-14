import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from "styled-components";

const Container = styled.blockquote`
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

const BlockQuote = ({ quote, author }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    let { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height })
  }, [quote])

  return (
    <Container>
      <p ref={pRef}>
        <strong>{quote}</strong>
      </p>
      <footer>{author}</footer>

      <code>{JSON.stringify(boxSize)}</code>
    </Container>
  )
}

export default BlockQuote