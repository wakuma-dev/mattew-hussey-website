import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { NavLink } from "react-router-dom";
import footerLinks from "../../data/footerLinks";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { state } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <footer
      className={`
        ${state.theme === "light" ? "bg-white text-black" : "bg-black text-white"}
        transition-all duration-150
        mx-auto w-full
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3
        px-4 sm:px-6 md:px-10 lg:px-12 py-6
      `}
    >
      {footerLinks.map((section) => (
        <div key={section.section} className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold capitalize">
            {t(section.section)}
          </h2>

          <ul className="flex flex-col gap-2 text-sm opacity-80">
            {section.links.map((link) => (
              <li key={link}>
                <NavLink
                  to={`/${link}`}
                  className="hover:opacity-100 hover:underline transition"
                >
                  {t(link)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
