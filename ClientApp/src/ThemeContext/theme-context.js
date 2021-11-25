import React from 'react';

export const themes = {
    light: {
      foreground: '#45424c',
      background: '#a1a1a1',
    },
    dark: {
      foreground: '#25221c',
      background: '#d7d7d7',
    },
  };

//#3a342c
  const defaultTheme = {
    themeName: themes.light,
    theme: themes.light,
    toggleTheme: null,
  }

  export const ThemeContext = React.createContext(defaultTheme);

