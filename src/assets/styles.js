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
  photoMainContianer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: deviceSize.width,
    borderRadius: 100,
  },
  photoContianer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    elevation: 10,
  },

  photo: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.BUTTON_DARK,
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  displayNameContianer: {
    marginTop: 10,
    backgroundColor: '#efe2e0',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
  },
  displayName: {
    color: '#333',
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
    backgroundColor: '#f0f0f0',
    fontFamily: differentFont,
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

  buttons: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: 20,
    elevation: 5,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },

  settingsIcon: {
    color: '#FFA643',
    margin: 15,
  },
  closingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 5,
    paddingBottom: 5,
  },
  signOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 4,
    padding: 4,
    backgroundColor: '#e00000',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 5,
    width: deviceSize.width / 3,
    elevation: 5,
  },
  signOutIcon: {
    marginRight: 5,
    paddingRight: 5,
    flexDirection: 'row',
  },
  signOutText: {
    marginRight: 5,
    paddingRight: 5,
    color: '#fff',
    fontFamily: differentFont,
  },
});
const lobby_container_styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
  inputCopy: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
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
    backgroundColor: '#f0f0f0',
    fontFamily: differentFont,
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

  buttonOrange: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: 'orange',
    elevation: 15,
    marginRight: 10,
  },

  phContainer: {
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 5,
    padding: 5,
    elevation: 15,
  },
  buttonYellow: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: 'green',
    elevation: 15,
    marginLeft: 10,
  },
  iconHour: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    height: 70,
  },
  iconCheck: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    height: 70,
  },
  card:{
    margin:10,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    width: deviceSize.width/2.5,
    borderRadius:10,
    backgroundColor: 'rgba(250, 250,250, 0.5)',
  },

  photoContianer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    elevation: 20,
    
  },

  photo: {

    borderWidth: 2,
    borderColor: colors.BUTTON_DARK,
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  displayNameContianer: {
    marginTop: 10,
    backgroundColor: '#efe2e0',
    padding: 10,
    borderRadius: 10,
  },
  displayName: {
    color: '#333',
  },
  photoMainContianer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  lobby_container_styles,
};
