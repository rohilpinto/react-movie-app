import styled from "styled-components";
import { MediaQuery } from "../../MediaQueries";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 30px 10px;
  justify-content: center;
  justify-items: center;

  .icon {
    width: 30px;
    height: 30px;
  }

  ${MediaQuery("lg")`
   grid-template-columns: repeat(3, minmax(250px, 1fr));
  `}
  ${MediaQuery("md")`
   grid-template-columns: repeat(3, minmax(250px, 1fr));
  `}
  ${MediaQuery("sm")`
   grid-template-columns: repeat(2, minmax(100px, 1fr));
  `}
  ${MediaQuery("xs")`
   grid-template-columns: repeat(1, minmax(250px, 1fr));
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  /* height: 400px; */
  /* height: 400px; */

  /* margin: 1px; */
  /* border: 1px solid #000; */
  padding: 0px;
  text-align: center;

  img {
    width: 250px;
    border-radius: 8px;

    box-shadow: 0px 10px 50px -10px rgb(0 0 0 / 38%);
  }

  .img-wrapper {
    height: auto;
  }

  .text-wrapper {
    margin-top: 20px;
    height: 100px;
  }

  ${MediaQuery("md")`
     img {
        width: 250px;
     }
  `}
  ${MediaQuery("sm")`
     width: 150px;

     img {
        width: 150px;
     }

      

  `}
`;

export const MovieTitle = styled.h1`
  font-size: 20px;

  font-weight: 500;

  ${MediaQuery("sm")`
   font-size: 13px  
  `}
`;
