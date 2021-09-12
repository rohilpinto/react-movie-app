import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 50px;
  display: flex;
  /* border: 1px solid #000; */
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
  padding: 3px 5px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0);
  font-size: 20px;
  border: none;
  border-radius: 5px;
  :focus-visible {
    outline: 3px dashed #8e9dff;
  }

  background: linear-gradient(269.94deg, #04d5d5 0.05%, rgba(3, 255, 240, 0.794583) 155.99%);
  ::placeholder {
    color: white;
    padding: 5px;
  }
`;

export const Form = styled.form`
  position: relative;
`;

// export const ReleaseDate = styled
