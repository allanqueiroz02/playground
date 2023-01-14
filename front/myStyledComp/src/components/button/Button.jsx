import styled from "styled-components";

const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.primary.primaryColor};
  color: ${({ theme }) => theme.primary.seconderyColor};
  padding: 16px;
  opacity: 0.5;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export { CustomButton };
