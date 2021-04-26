import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <h1>Bienvenidos a HookApp</h1>
      <h5>
        Una app para testear diversos hooks de ReactJs y ver su funcionamiento
      </h5>

      <h6>Navega por los distintos Hooks que existen en el menu de arriba </h6>
    </Container>
  );
};

export default Home;
