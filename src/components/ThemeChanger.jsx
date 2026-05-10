import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

const ThemeChanger = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        dispatch({
          type: "SET_THEME",
          payload: state.theme === "light" ? "dark" : "light",
        })
      }
    >
      {state.theme === "light" ? <FiSun className="text-black"/> : <IoMoon className="text-white"/>}
    </button>
  );
};

export default ThemeChanger;
