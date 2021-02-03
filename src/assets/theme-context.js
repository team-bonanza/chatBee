import React from 'react';
import {default as theme} from './theme.json';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
