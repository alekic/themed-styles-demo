import React, { useContext, useState } from 'react';
import { dark, light } from './themes';

const themes = [
  light,
  dark
];

const ThemeContext = React.createContext({
  theme: {
    name: 'default',
    colors: {}
  },
  setTheme: name => { }
});

export default ThemeContext;

export function ThemeProvider({ children }) {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const context = {
    theme: selectedTheme,

    setTheme: name => {
      const theme = themes.find(theme => theme.name === name);

      if (!theme) {
        throw new Error(`Invalid theme: ${name}`);
      }

      setSelectedTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme } = useContext(ThemeContext);
  return theme;
}
