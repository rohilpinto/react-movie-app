import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { SidebarWrapperContainer, HomeButton } from "./style";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
const SideMenu = ({ toggle, toggled }) => {
  const history = useHistory();

  const handleHomeButton = () => {
    history.push("/");
  };

  return (
    <>
      <SidebarWrapperContainer as={motion.div} initial={{ left: -500 }} animate={{ left: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
        <div className="hamButtonWrapper	">
          <Hamburger toggled={toggled} toggle={toggle} size={40} color="#4FD1C5"></Hamburger>
        </div>

        <HomeButton onClick={handleHomeButton}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </HomeButton>
      </SidebarWrapperContainer>
    </>
  );
};

export default SideMenu;
