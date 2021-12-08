import React, { useContext } from 'react';
import { SafeAreaView, Switch, Text } from 'react-native';

import { StyleSheet, useStyleSheet } from '../style';
import { ThemeContext } from '../theme';

export default function HomeScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themedStyles = useStyleSheet(styles);

  const isDarkMode = theme.name === 'dark';

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <SafeAreaView style={themedStyles.container}>
      <Text style={themedStyles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Switch
        onValueChange={handleToggleTheme}
        value={isDarkMode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'background-primary',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'text-primary',
    padding: 20
  }
});
