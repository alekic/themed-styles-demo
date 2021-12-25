import React from 'react';
import { useTheme } from './ThemeContext';

export default function withTheme(WrappedComponent) {
  return function (props) {
    const theme = useTheme();

    return (
      <WrappedComponent theme={theme} {...props} />
    );
  };
}
