import { useTheme } from '../theme';

export default class StyleSheet {

  static applyTheme(styles, theme) {
    const themedStyles = {};

    Object.keys(styles).forEach(key => {
      themedStyles[key] = applyTheme(styles[key], theme);
    });

    return themedStyles;
  }

  static create(styles) {
    return styles;
  }

}

function applyTheme(style, theme) {
  const themedStyle = {};

  Object.entries(style).forEach(([key, value]) => {
    if (Object.prototype.hasOwnProperty.call(theme.colors, value)) {
      themedStyle[key] = theme.colors[value];
    } else {
      themedStyle[key] = style[key];
    }
  });

  return themedStyle;
}

export function useStyleSheet(styles) {
  const theme = useTheme();
  return StyleSheet.applyTheme(styles, theme);
}
