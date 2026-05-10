import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import useMobileMenu from "../../hooks/useMobileMenu";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const { mobileMenuOpen, menuToggle, closeMenu } = useMobileMenu();
  const { t } = useTranslation();
  const context = useContext(ThemeContext);

  // 2. CRASH PREVENTION: Check if context exists
  if (!context) return null;
  const { state } = context;

  return (
    <nav
      className={`relative md:hidden ${state.theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      {/* Toggle Button */}
      <button
        onClick={menuToggle}
        className="absolute top-1/2 -translate-y-1/2 left-0 z-50"
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <IoCloseSharp size={20}/> : <FaBars size={20}/>}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 left-0 top-14 z-40 w-64 flex flex-col items-center justify-center p-2 bg-inherit shadow-xl"
          >
            {/* 3. CRASH PREVENTION: Optional chaining ensures map doesn't run on undefined */}
            {Array.isArray(NavItems) &&
              NavItems.map((item) => (
                <li key={item.name} className="py-1">
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `font-kiona text-[20px] transition-all duration-150 ${
                        state.theme === "light" ? "text-black" : "text-white"
                      } ${isActive ? "text-[#f54b5d]" : ""}`
                    }
                  >
                    {t(item.name)}
                  </NavLink>
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
