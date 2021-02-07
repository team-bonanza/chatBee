import {StyleSheet, Appearance} from 'react-native';
import colors from './colors';

const theme = Appearance.getColorScheme();
const TEXT = theme === 'dark' ? colors.WHITE : colors.BLACK;
const BACKGROUND = theme === 'dark' ? colors.BUTTON_DARK : colors.BUTTON_LIGHT;

const beeView_style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
});

const beeButton_style = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    borderRadius: 5,
  },
  title: {
    color: TEXT,
    padding: 10,
    fontWeight: 'bold',
  },
});

export {beeView_style, beeButton_style};
