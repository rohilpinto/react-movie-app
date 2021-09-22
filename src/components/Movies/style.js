import styled from "styled-components";
import ButtonMain from "../Button";
export const MainWrapper = styled.div`
  width: 100%;
  background: #ffff;
`;

export const PageButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* .next-btn {
    
    justify-self: flex-end;
    align-self: flex-end;
  } */
`;

// export const PageButtons = styled.button`
//   max-width: 150px;
//   width: 100%;
//   height: 40px;
//   padding: 10px 15px;
//   border-radius: 8px;
//   /* background-color: #74d6e9f5; */
//   border: none;
//   background: rgba(3, 255, 240, 0.794583);
//   color: black;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s ease-out;

//   &:hover {
//     background: rgb(3 227 214 / 79%);
//   }
//   &:active {
//     transform: scale(0.9);
//   }
// `;

export const TextWrapper = styled.div`
  font-size: 12px;
  margin: 5px;
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const Arrows = styled.img`
  width: 15px;
  /* margin-left: 5px;
  margin-right: 5px; */
  /* margin: 5px; */
`;

export const PrevButton = styled(ButtonMain)`
  visibility: ${({ page }) => (page > 1 ? "visible" : "hidden")};
`;

export const NextButton = styled(ButtonMain)`
  visibility: ${({ page }) => (page > 500 ? "hidden" : "visible")};
`;
