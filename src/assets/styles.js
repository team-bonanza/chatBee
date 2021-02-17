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

const login_page_styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'stretch',
  },
  googleSign: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#333',
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    textAlignVertical: 'center',
    elevation: 10,
  },
  googleSignIcon: {
    padding: 5,
    color: colors.BUTTON_DARK_HOVER,
  },
  googleSignText: {
    padding: 5,
    color: colors.BUTTON_DARK,
    fontFamily: differentFont,
  },
});

const home_page_styles = StyleSheet.create({
  photoContianer: {
    flex: 2,
    justifyContent: 'center',
  },

  photo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'red',
    elevation: 15,
  },

  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  inputArea: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
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

  modalIconOut: {
    bottom: -50,
    position: 'relative',
    margin: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: 20,
    elevation: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  iconOut: {
    margin: 15,
  },
  settingsIcon: {
    color: '#FFA643',
    margin: 15,
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
  login_page_styles,
  home_page_styles,
};
