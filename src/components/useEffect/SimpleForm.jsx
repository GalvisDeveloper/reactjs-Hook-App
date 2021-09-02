import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Additional from "./Additional";

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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   console.log("log");
  // }, []);

  return (
    <CustomFragment>
      <Title size={3}> Use Effect </Title>
      <hr />

      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name && <Additional />}
    </CustomFragment>
  );
};

export default SimpleForm;
