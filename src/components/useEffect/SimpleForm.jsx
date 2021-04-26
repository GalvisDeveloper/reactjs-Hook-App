import React, { useEffect } from "react";
import styled from "styled-components";

// ----------------------------------------

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

// -------------------------------------

const SimpleForm = () => {
  return (
    <CustomFragment>
      <Title size={3}> Use Effect </Title>
      <hr />
    </CustomFragment>
  );
};

export default SimpleForm;
