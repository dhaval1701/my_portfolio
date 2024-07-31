import { createContext, useContext, useState, useEffect } from "react";

// themes/lightTheme.js
export const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  // other styles...
};

// themes/darkTheme.js
export const darkTheme = {
  background: "#282c36",
  text: "#ffffff",
  // other styles...
};

const ThemeContext = createContext();

const prefersDarkMode = () => {
  // Check if the system prefers dark mode
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if there is a theme preference stored in local storage
    const storedTheme = localStorage.getItem("theme");
    // If there is a stored theme, use it, otherwise set the default based on system preference
    return storedTheme ? JSON.parse(storedTheme) : prefersDarkMode();
  });

  useEffect(() => {
    // Update local storage when theme changes
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme1 = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme1 }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
