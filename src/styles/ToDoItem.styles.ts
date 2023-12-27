import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin: 5px 0;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  padding: 5px;
`;

export const Title = styled.div<{ $completed: boolean }>`
  text-align: left;
  color: ${(props) => (props.$completed ? "#c0c2c0" : "#000000")};
  text-decoration: ${(props) => props.$completed && "line-through"};
  font-size: 15px;
  transition: all 0.2s;
`;
