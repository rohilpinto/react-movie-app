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
