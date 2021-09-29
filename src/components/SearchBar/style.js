import styled from "styled-components";
import ButtonMain from "../Button";
export const SearchBarWrapper = styled.div`
  max-width: 1400px;
  margin: 30px auto 50px auto;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #000; */
  justify-content: center;

  align-items: center;
`;

export const SearchContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HamMenuIcon = styled.img`
  width: 50px;
  /* border-radius: 8px; */
`;

export const HamburgerWrapper = styled.div`
  width: 50px;
  /* height: 100%; */
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 500px;
  min-width: 300px;

  height: 40px;
  border: 1px solid rgba(0, 0, 0);
  font-size: 20px;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  :focus-visible {
    outline: 3px dashed #8e9dff;
  }
  font-weight: 600;
  background: #05d3d3;
  ::placeholder {
    color: white;
    /* padding: 5px; */
  }
`;

export const FavoriteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const FavoriteButton = styled(ButtonMain)`
  width: 60px;
  background: linear-gradient(269.94deg, #04d5d5 0.05%, rgba(3, 255, 240, 0.794583) 155.99%);

  svg {
    width: 100px;

    /* &:hover {
      fill: black;
    } */
  }
`;

// export const ReleaseDate = styled
