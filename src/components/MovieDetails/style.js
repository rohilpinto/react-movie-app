import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto;
  /* height: 200px; */
  color: black;
`;

export const MovieContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const MovieImageContainer = styled.div`
  display: flex;
  max-width: 700px;
`;

export const MovieImage = styled.img`
  height: 500px;
  border-radius: 8px;
`;

export const MovieTextContentWrapper = styled.div`
  /* border: 1px solid green; */
  max-width: 700px;

  padding: 0 40px;
`;

export const MovieTitle = styled.h1`
  font-size: 30px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-weight: 300;
  }

  .favorite-icon {
    width: 30px;
    margin-left: 10px;
    /* transition: all 0.1s;

    &:active {
      transform: scale(0.9);
    } */
  }
`;

// export const FavoriteIconImg = styled.div`
//   width: 30px;
//   margin-left: 10px;
//   transition: all 0.1s;
// `;

export const OverviewWrapper = styled.div``;
export const Overview = styled.p`
  font-size: 19px;
`;
