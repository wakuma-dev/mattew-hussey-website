import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Translation() {
  const { state } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <div
        onClick={toggleMenu}
        className={`flex items-center gap-1 cursor-pointer px-3 py-1  rounded-md ${
          state.theme === "light"
            ? "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        <TbWorld />
        <span className="uppercase text-sm">{i18n.language}</span>
        <MdKeyboardArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute mt-2 w-full rounded-md shadow-md overflow-hidden ${
              state.theme === "light" ? "bg-white text-black" : "bg-black text-white"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <button
              onClick={() => handleChange("en")}
              className="block w-full p-2 text-left"
            >
              English
            </button>
            <button 
              onClick={() => handleChange("am")}
              className="block w-full p-2 text-left"
              >
                Amharic
              </button>
            <button
              onClick={() => handleChange("it")}
              className="block w-full p-2 text-left"
            >
              Italian
            </button>
            <button
              onClick={() => handleChange("es")}
              className="block w-full p-2 text-left"
            >
              Spanish
            </button>
            <button
              onClick={() => handleChange("zh")}
              className="block w-full p-2 text-left"
            >
              Chinese
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
