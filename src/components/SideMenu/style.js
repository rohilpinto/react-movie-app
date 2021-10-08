import styled from "styled-components";
import ButtonMain from "../Button";
export const SidebarWrapperContainer = styled.div`
  width: 400px;
  height: 100%;

  background: rgba(92, 226, 255, 0.48);
  backdrop-filter: blur(50px);
  position: fixed;
  bottom: 0;
  overflow-y: scroll;
  z-index: 10;
  padding-right: 15px;
  .hamButtonWrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

export const HomeButton = styled(ButtonMain)`
  display: flex;
  justify-content: center;

  margin: 50px auto;
  background: none;
  backdrop-filter: blur(20px);
  box-shadow: rgb(255 255 255 / 15%) 0px 5px 15px 0px;

  &:hover {
    background: #04d5d5;
  }

  svg {
    width: 25px;
  }
`;

export const CategoriesWrapper = styled.div`
  padding: 15px;
  /* border: 1px solid red; */
`;

export const CategoriesButton = styled.div`
  width: 290px;
  border-radius: 8px;
  padding: 5px;
  height: 50px;
  font-size: 22px;
  display: flex;
  margin: 10px auto;
  background-color: hsl(0deg 0% 98% / 45%);
  justify-content: center;
  align-items: center;
  color: hsl(0deg 0% 13% / 78%);
  transition: all 0.1s ease-out;

  &:hover {
    background-color: hsl(0deg 0% 98% / 75%);
  }
  &:active {
    background-color: hsl(0deg 0% 98% / 95%);
    transform: scale(0.9);
  }
`;
