import {StyleSheet, Appearance, Dimensions} from 'react-native';
import colors from './colors';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
const deviceSize = Dimensions.get('window');
// FOR DARK & LIGHT THEME
const theme = Appearance.getColorScheme();
const TEXT = theme === 'dark' ? colors.WHITE : colors.BLACK;
const BACKGROUND = theme === 'dark' ? colors.BUTTON_DARK : colors.BUTTON_LIGHT;

// FONT UYGULAMASI
const customTextProps = {
  style: {
    fontFamily: 'Comfortaa-Regular',
  },
};
setCustomText(customTextProps);
setCustomTextInput(customTextProps);

const differentFont = 'Comfortaa-Bold';

const login_container_styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFont: {
    fontFamily: differentFont,
    fontSize: 40,
    color: '#333666',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  inputstyle: {
    flex: 2,
  },
});

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
    borderRadius: 6,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceSize.width / 3,
    alignSelf: 'center',
    marginTop: 15,
  },
  title: {
    color: '#fff',
    padding: 5,
    margin: 10,
    fontSize: 12,
    letterSpacing: 4,
  },
});

const beeButtonOutline_style = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    color: BACKGROUND,
    padding: 10,
    margin: 10,
    fontSize: 20,
    fontFamily: differentFont,
    letterSpacing: 4,
  },
});

const beeInput_styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: deviceSize.width / 1.5,
    borderColor: '#ddd',
    borderWidth: 1,
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 5,
  },
  errorText: {
    marginTop: 2,
    color: '#FF0000',
    fontWeight: 'bold',
  },
});
const copy_icon_styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 5,
  },
  iconCopy: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: '#00509D',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    height: 55,
  },
  iconOut: {
    bottom: -50,
    position: 'relative',
    margin: 5,
    justifyContent: 'center',
  },
  input: {
    width: deviceSize.width / 2,
    borderWidth: 2,
    borderColor: '#00509D',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 55,
    paddingLeft: 10,
    color: '#333666',
    textAlignVertical: 'center',
  },
});

export {
  beeView_style,
  beeButton_style,
  beeButtonOutline_style,
  beeInput_styles,
  login_container_styles,
  copy_icon_styles,
};
