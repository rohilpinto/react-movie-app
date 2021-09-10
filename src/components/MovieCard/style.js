import styled from "styled-components";

import { MediaQuery } from "../../MediaQueries";

export const MovieTitle = styled.h1`
  font-size: 20px;

  font-weight: 500;

  ${MediaQuery("sm")`
   font-size: 13px  
  `}
`;
