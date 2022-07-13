import React, { useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';
import { dark, light } from './themes';

const themes = [light, dark];

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);

  const context = useMemo(
    () => ({
      theme,

      setTheme: (name) => {
        const newTheme = themes.find((theme) => theme.name === name);

        if (!newTheme) {
          throw new Error(`Invalid theme: ${name}`);
        }

        setTheme(newTheme);
      }
    }),
    [theme, themes]
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
