import { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { CustomButton, CustomInput } from "./components";
import Espada from "./icons/espada2.png";

const Container = styled.div`
  padding: 30px;
  background-color: #272970;
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

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  color: #80ee80;
`;

const theme = {
  primary: {
    primaryColor: "#059862",
    seconderyColor: "#fff",
  },
};

function App() {
  const [changeColorTitle, setChangeColorTitle] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FirstTitle variant={changeColorTitle}>
          Styled Componentes com Vite
        </FirstTitle>
        <CustomInput />
        <Rotate>Girando</Rotate>
        <input
          type="checkbox"
          name="change_color"
          value={changeColorTitle}
          onClick={() => setChangeColorTitle((oldV) => !oldV)}
        />
        <CustomButton onClick={() => console.log("Consologzou")}>
          ENVIAR TUDO CARAIO
        </CustomButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
