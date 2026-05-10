import React, { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext(null);

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);



  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
