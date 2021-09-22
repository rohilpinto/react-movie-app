import React from "react";

import { ButtonStyled } from "./style";

const ButtonMain = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default ButtonMain;
