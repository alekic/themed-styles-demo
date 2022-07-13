import React from 'react';
import useTheme from './useTheme';

export default function withTheme(WrappedComponent) {
  return function (props) {
    const theme = useTheme();

    return <WrappedComponent theme={theme} {...props} />;
  };
}
