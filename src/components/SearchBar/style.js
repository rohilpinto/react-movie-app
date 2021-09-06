import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 50px;
  display: flex;
  /* border: 1px solid #000; */
  justify-content: space-between;
`;

export const HamMenuIcon = styled.img``;

export const HamburgerWrapper = styled.div`
  width: 50px;
  /* height: 100%; */
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 400px;
  min-width: 300px;
  padding: 3px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0);
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: grey;

  ::placeholder {
    color: white;
  }
`;

export const Form = styled.form``;
