import React, { useContext } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Cta from "./Cta";
import { ThemeContext } from "../../context/ThemeProvider";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isScrolled }) => {
  const { state } = useContext(ThemeContext);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        px-4 sm:px-6 md:px-10 lg:px-12
        py-3 flex items-center justify-between
        transition-all duration-300

        backdrop-blur-lg
        ${state.theme === "light" ? "bg-white text-black" : "bg-black text-white"}
        ${isScrolled ? "shadow-lg py-2" : "py-4 shadow-none"}
      `}
    >
      <div className="flex items-center gap-8">
        <MobileMenu />
        <Logo />
      </div>

      <NavMenu />
      <Cta />
    </header>
  );
};

export default Navbar;
