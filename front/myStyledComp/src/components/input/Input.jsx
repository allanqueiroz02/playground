import styled from "styled-components";

const CustomInput = styled.input`
  width: 50%;
  padding: 17px;
  border: 4px solid #a7a1a1;
  font-size: 1.1rem;
  outline: none;
  &:hover {
    border: 4px solid #d91f1f;
  }
  &:focus {
    border: 4px solid #fff;
    border-left: 4px solid #d91f1f;
  }
`;

export { CustomInput };
