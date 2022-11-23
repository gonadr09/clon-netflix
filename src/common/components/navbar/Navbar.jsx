import React from "react";
import { NavbarContainer } from "./styles/NavbarContainer"
import netflixLogo from "../../../assets/netflix.png"
import Logo from "./components/Logo";
import styles from "./styles/Container.module.css";


const Navbar = () => {

  return (
    <NavbarContainer>
      <div className={styles.container}>
        <Logo logo={netflixLogo}/>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
