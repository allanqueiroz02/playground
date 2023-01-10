import { ButtonStyled } from "./style";

function Button({ name, onClick }) {
  return <ButtonStyled onClick={() => onClick()}>$Dollar_{name}</ButtonStyled>;
}

export default Button;
