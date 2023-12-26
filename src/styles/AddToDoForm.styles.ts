import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #e3e3e3;
  padding: 10px;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #409fde;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;
