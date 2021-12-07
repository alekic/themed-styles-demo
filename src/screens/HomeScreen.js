import React, { useContext } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

import { ThemeContext } from '../theme';

export default function HomeScreen() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setTheme((theme.name === 'dark') ? 'light' : 'dark');
  };

  return (
    <SafeAreaView style={[
      styles.container,
      {
        backgroundColor: theme.colors['background-primary']
      }
    ]}>
      <Text style={[
        styles.text,
        {
          color: theme.colors['text-primary']
        }
      ]}>
        Open up App.js to start working on your app!
      </Text>
      <Button
        onPress={handleToggleTheme}
        title="Toggle Theme"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    padding: 20
  }
});
