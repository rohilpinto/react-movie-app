import styled from "styled-components";

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
