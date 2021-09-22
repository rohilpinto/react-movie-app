import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { SidebarWrapperContainer } from "./style";
import { motion } from "framer-motion";
const SideMenu = ({ toggle, toggled }) => {
  return (
    <>
      <SidebarWrapperContainer as={motion.div} initial={{ left: -500 }} animate={{ left: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
        <div className="hamButtonWrapper	">
          <Hamburger toggled={toggled} toggle={toggle} size={40} color="#4FD1C5"></Hamburger>
        </div>
      </SidebarWrapperContainer>
    </>
  );
};

export default SideMenu;
