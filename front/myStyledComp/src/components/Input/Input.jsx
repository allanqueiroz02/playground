import styled from "styled-components";

const InputStyled = styled.input`
  padding: 15px;
  width: 200px;
  margin-left: 10px;
`;

const Input = ({ name, value, onChange, placeholder = "hordor" }) => {
  return (
    <InputStyled
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
