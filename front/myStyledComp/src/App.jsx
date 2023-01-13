import { useState } from "react";
import styled from "styled-components";

import { CustomInput } from "./components";
import Espada from "./icons/espada2.png";

const Container = styled.div`
  padding: 30px;
  background-color: #0c0f6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  cursor: url(${Espada}), auto;
`;

const FirstTitle = styled.h1`
  color: ${({ variant }) => (variant ? "#67e01b" : "#fff")};
  text-shadow: 2px;
  font-size: 3rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

function App() {
  const [changeColorTitle, setChangeColorTitle] = useState(false);

  return (
    <Container>
      <FirstTitle variant={changeColorTitle}>
        Styled Componentes com Vite
      </FirstTitle>
      <CustomInput />
      <input
        type="checkbox"
        name="change_color"
        value={changeColorTitle}
        onClick={() => setChangeColorTitle((oldV) => !oldV)}
      />
    </Container>
  );
}

export default App;
