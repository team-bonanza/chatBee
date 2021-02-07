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
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    color: '#fff',
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

const beeButtonOutline_style = StyleSheet.create({
  container: {
    borderRadius: 10,
    //elevation: 10,
    margin: 10,
  },
  title: {
    color: BACKGROUND,
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {beeView_style, beeButton_style, beeButtonOutline_style};
