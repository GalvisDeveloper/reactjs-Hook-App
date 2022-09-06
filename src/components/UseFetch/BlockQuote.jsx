import React from 'react';
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

const BlockQuote = ({quote, author}) => {
    return (
        <Container>
            <p>
                <strong>{quote}</strong>
            </p>
            <footer>{author}</footer>
        </Container>
    )
}

export default BlockQuote