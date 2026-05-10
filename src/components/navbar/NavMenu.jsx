import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavMenu() {
  const { state } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex items-center gap-4">
      <ul className="flex items-center gap-6">
        {NavLinks.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-[16px] leading-[20px] font-light transition-all duration-150 ${
                  state.theme === "light" ? "text-black" : "text-white"
                } ${isActive ? "text-[#f54b5d]" : ""}`
              }
            >
              {t(item.name)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
