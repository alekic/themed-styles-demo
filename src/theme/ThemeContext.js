import React from 'react';

export default React.createContext({
  theme: {
    name: 'default',
    colors: {}
  },
  setTheme: (name) => {}
});
