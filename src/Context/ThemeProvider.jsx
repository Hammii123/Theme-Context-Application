import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  
  useEffect(()=>{
    localStorage.setItem("theme",theme);
  },[theme]);
  

 function toggleTheme() {

    if (theme === "light") {
      setTheme("dark" );
    } else {
      setTheme("light");
    }

  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}