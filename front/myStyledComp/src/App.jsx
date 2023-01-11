// import { useState } from "react";
import styled from "styled-components";

import { Button } from "./components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4287f5;
  height: 100vh;
`;

const Container = styled.div`
  padding: 20px;
`;

function App() {
  function testes() {
    console.log("Consolou legal");
  }

  return (
    <Main>
      <Container>
        <h1>Vite + S-C</h1>
        <Button name="Teste" onClick={testes} />
      </Container>
    </Main>
  );
}

export default App;
