import styled from "styled-components";
import ButtonMain from "../Button";
export const SidebarWrapperContainer = styled.div`
  width: 400px;
  height: 100%;

  background: rgba(92, 226, 255, 0.48);
  backdrop-filter: blur(50px);
  position: absolute;
  bottom: 0;

  z-index: 10;

  .hamButtonWrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

export const HomeButton = styled(ButtonMain)`
  display: flex;
  justify-content: center;
  /* background: linear-gradient(269.94deg, #04d5d5 0.05%, rgba(3, 255, 240, 0.794583) 155.99%); */
  margin: 50px auto;
  background: none;
  backdrop-filter: blur(20px);
  box-shadow: rgb(255 255 255 / 15%) 0px 5px 15px 0px;

  &:hover {
    background: #04d5d5;
  }

  svg {
    width: 25px;

    /* &:hover {
      fill: black;
    } */
  }
`;
