import React from "react";
import { NavbarContainer } from "./styles/NavbarContainer";
import Logo from "./components/Logo";
import styles from "./styles/Navbar.module.css";
import Menu from "./components/Menu";
import AuthMenu from "./components/AuthMenu";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className={styles.container}>
        <div>
          <Logo />
          <Menu />
        </div>
        <AuthMenu />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
