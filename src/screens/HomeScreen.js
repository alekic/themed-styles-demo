import React, { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

import StyleSheet, { useStyleSheet } from '../style/StyleSheet';
import { ThemeContext } from '../theme';

export default function HomeScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themedStyles = useStyleSheet(styles);

  const handleToggleTheme = () => {
    setTheme((theme.name === 'dark') ? 'light' : 'dark');
  };

  return (
    <SafeAreaView style={themedStyles.container}>
      <Text style={themedStyles.text}>
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
    backgroundColor: 'background-primary',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'text-primary',
    padding: 20
  }
});
