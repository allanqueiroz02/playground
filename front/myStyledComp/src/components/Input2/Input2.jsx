import styled from "styled-components";

const Input2 = styled.button`
  padding: 15px;
  margin-left: 10px;
  background-color: ${({ bigger }) => (bigger ? "#e20fa3" : "#c01616")};
  cursor: cell;
`;

export default Input2;
