import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('blue')

    const toggleTheme = () => {
        setTheme(theme === 'blue' ? 'light' : 'blue');
    }
const value = {
    theme,
    toggleTheme
}

  return <ThemeContext.Provider value={value}>
      {children}
  </ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
