import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { HomeScreen } from './screens';
import { ThemeContext, ThemeProvider } from './theme';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <>
            <StatusBar style={(theme.name === 'dark') ? 'light' : 'dark'} />
            <HomeScreen />
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

registerRootComponent(App);
