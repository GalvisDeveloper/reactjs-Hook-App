import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWarningMessage from "./InputWarningMessage";

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

const InputText = styled.input`
  font-size: ${(props) => props.size}px;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
  padding: 8px;
  color: #3f51b5;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: max-content;
  box-sizing: border-box;
`;

const InputContent = styled.div`
  display: block;
  height: ${(props) => props.hg}px;
  margin-right: ${(props) => props.mr}px;
  max-width: 900px;
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

  return (
    <CustomFragment>
      <Title size={3}> Use Effect </Title>
      <hr />

      <CustomFragment className="actions">
        <InputContent hg={85} mr={15}>
          <InputText
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            autoComplete="off"
            value={name}
            size={20}
            onChange={handleInputChange}
          />
          {name && <InputWarningMessage />}
        </InputContent>
        <InputContent hg={85}>
          <InputText
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            autoComplete="off"
            value={email}
            size={20}
            onChange={handleInputChange}
          />
        </InputContent>
      </CustomFragment>
    </CustomFragment>
  );
};

export default SimpleForm;
