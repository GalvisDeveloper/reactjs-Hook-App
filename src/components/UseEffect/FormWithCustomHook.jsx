import React, { useEffect } from "react";
import styled from "styled-components";
import { CustomFragment, InputContent, InputText, OptionalMessage, Title } from "../../styles/General";
import { useForm } from "./../../hooks/useForm";

// ----------------------------------------

const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 8px;
  border: none;
  width: 80px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
  font-size: 20px;
  margin: auto;
`;

// -------------------------------------

const initialForm = {
  name: "",
  email: "",
  password: "",
};

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log("Email changed");
  }, [email]);

  return (
    <CustomFragment>
      <Title size={3}> Form With Custom Hook </Title>
      <hr />

      <form action="Post" onSubmit={handleSubmit}>
        <CustomFragment className="actions">
          <InputContent hg={85}>
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
          </InputContent>

          <InputContent hg={85}>
            <InputText
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              autoComplete="off"
              value={email}
              size={20}
              onChange={handleInputChange}
            />
          </InputContent>

          <InputContent hg={85}>
            <InputText
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              autoComplete="off"
              value={password}
              size={20}
              onChange={handleInputChange}
            />
          </InputContent>
        </CustomFragment>

        {name && email && password && (
          <OptionalMessage>
            <ButtonForm type="submit">Save</ButtonForm>
            <p>Click and Look the console </p>
          </OptionalMessage>
        )}
      </form>
    </CustomFragment>
  );
};

export default FormWithCustomHook;
