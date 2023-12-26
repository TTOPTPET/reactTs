import styled from "styled-components";

export const Button = styled.button`
  width: 400px;
  height: 40px;
  background-color: #409fde;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 15px;
  cursor: pointer;

  &:disabled {
    background-color: #84b2d1;
    cursor: default;
  }
`;
