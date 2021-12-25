import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Switch, Text } from 'react-native';

import { StyleSheet, useStyleSheet } from '../style';
import { ThemeContext, withTheme } from '../theme';

function HomeScreen({ theme }) {
  const { setTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme.name === 'dark');
  const themedStyles = useStyleSheet(styles);

  useEffect(() => {
    setTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <SafeAreaView style={themedStyles.container}>
      <Text style={themedStyles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Switch
        onValueChange={setDarkMode}
        value={darkMode}
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

export default withTheme(HomeScreen);
