import { useState } from "react";
import styled from "styled-components";

import { Button, Input, Input2 } from "./components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e217d;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ variant }) => (variant ? "#38e543" : "#fff")};
  font-size: 100px;
`;

const Container = styled.div`
  /*Comment*/
  padding: 30px;
  background-color: #0c0f6b;
  border-radius: 50%;
  cursor: crosshair;
`;

const MyResult = styled.h3`
  color: #12c73f;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const ClonedButton = styled(Input2)`
  color: #fff;
  border-color: #fff;
`;

function App() {
  const [name, setName] = useState("");

  function testes() {
    console.log("Consolou legal");
  }

  return (
    <Main>
      <Container>
        <Title variant>Vite + S-C</Title>
        <Button name="Teste" onClick={testes} />
        <Input name="nome" value={name} onChange={setName} bigger />
        <Input2 bigger onClick={() => console.log("clique no Input2")}>
          Input2 Button
        </Input2>
        <ClonedButton bigger as="a" onClick={() => console.log("CLONADO")}>
          Foi clonado
        </ClonedButton>
        <MyResult>{name}</MyResult>
      </Container>
    </Main>
  );
}

export default App;
