import styled from "styled-components";

export const ButtonStyled = styled.button`
  max-width: 150px;
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  border-radius: 5px;
  /* background-color: #74d6e9f5; */
  border: none;
  background: rgb(109 174 255);
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;

  /* visibility: page > 1 ? 'visble' : 'hidden'; */
  /* visibility: ${({ page }) => (page > 1 ? "visible" : "hidden")}; */
  
  &:hover {
    background: rgb(51 120 205);
  }
  &:active {
    transform: scale(0.9);
    background: rgb(9 79 167);
  }
`;
