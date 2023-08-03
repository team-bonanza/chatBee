import {StyleSheet, Appearance, Dimensions} from 'react-native';
import colors from './colors';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
const deviceSize = Dimensions.get('window');
// FOR DARK & LIGHT THEME
const theme = Appearance.getColorScheme();
const TEXT = theme === 'dark' ? colors.TEXTONE : colors.TEXTTWO;
const BACKGROUND = theme === 'dark' ? colors.BUTTON_DARK : colors.BUTTON_LIGHT;

const INPUTBACKGROUND =
  theme === 'dark' ? colors.BUTTON_DARK_HOVER : colors.BUTTON_LIGHT_HOVER;
const INPUTTEXT = theme === 'dark' ? '#f0f0f0' : 'white';

const PHOTOCONTAINERCOLOR =
  theme === 'dark' ? colors.BUTTON_DARK_HOVER : colors.BUTTON_LIGHT_HOVER;

const NAMEBACKGROUND =
  theme === 'dark' ? colors.BACKGROUND_LIGHT : colors.BACKGROUND_DARK;

const ICONCOLOR = theme === 'dark' ? 'white' : '#00509D';

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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: deviceSize.width,
    borderRadius: 100,
    paddingTop: 20,
    margin: 10,
  },
  photoContianer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    elevation: 5,
    padding: 5,
  },

  photo: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: PHOTOCONTAINERCOLOR,
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  displayNameContainer: {
    margin: 10,
    backgroundColor: TEXT,
    borderWidth: 2,
    borderColor: PHOTOCONTAINERCOLOR,
    padding: 5,
    borderRadius: 10,
    elevation: 5,
  },
  displayName: {
    color: NAMEBACKGROUND,
  },

  container: {
    flex: 2,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    //margin: 10,
  },
  createRoom: {
    color: INPUTTEXT,
    fontSize: 8,
    paddingLeft: 10,
    marginBottom: -20,
    zIndex: 1000,
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
    borderColor: ICONCOLOR,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 55,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: INPUTTEXT,
    textAlignVertical: 'center',
    backgroundColor: INPUTBACKGROUND,
    fontFamily: differentFont,
  },

  goToRoom: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: ICONCOLOR,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    height: 55,
  },
  icon: {
    color: ICONCOLOR,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
  },

  button: {
    marginBottom: 20,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ef0000',
    backgroundColor: 'red',
    borderRadius: 5,
  },

  signOutContainer: {
    backgroundColor: '#fdfdfd',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 5,
    width: deviceSize.width / 3,
    //elevation: 5,
  },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  signOutText: {
    color: '#e00000',
    fontFamily: differentFont,
    paddingBottom: 3,
    paddingLeft: 3,
  },
});

const SHAREICONS =
  theme === 'dark' ? colors.BUTTON_DARK_HOVER : colors.BUTTON_LIGHT_HOVER;

const ROOMTITLECOLOR = theme === 'dark' ? colors.BACKGROUND_LIGHT : '#f0a500';
const ROOMTITLETEXTCOLOR =
  theme === 'dark' ? colors.TEXTONE : colors.BACKGROUND_LIGHT;

const LESSOPACITYCONTAINER =
  theme === 'dark' ? 'rgb(37, 133, 142)' : 'rgb(100, 200, 200)';

const lobby_screen_styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    margin: 5,
    padding: 5,
    //    width: deviceSize.width * 0.9,
    backgroundColor: LESSOPACITYCONTAINER,
    borderRadius: 5,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  inviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 4,
    //borderRadius: 5,
    //borderColor: INPUTBACKGROUND,
  },
  inviteId: {
    width: deviceSize.width / 2,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    color: INPUTTEXT,
    fontSize: 12,
    textAlignVertical: 'center',
    backgroundColor: INPUTBACKGROUND,
    borderRadius: 5,
    fontFamily: differentFont,
    padding: 5,
  },

  shareIcon: {
    padding: 5,
    height: 30,
    justifyContent: 'center',
  },
  copyIcon: {
    padding: 5,
    height: 30,
    justifyContent: 'center',
  },

  icon: {
    color: SHAREICONS,
    padding: 5,
  },
  streamButtonContainer: {
    width: deviceSize.width / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streamButton: {
    backgroundColor: '#ff3344',
    color: '#eeeacc',
    fontFamily: differentFont,
    fontSize: 14,
    elevation: 5,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  listContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  roomTitleContainer: {
    width: deviceSize.width,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ROOMTITLECOLOR,
  },
  logoContainer: {
    backgroundColor: '#ddd',
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'center',
    // top: 50,
  },
  roomTitle: {
    flex: 1,
    fontFamily: differentFont,

    color: ROOMTITLETEXTCOLOR,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  lobbyContainer: {
    padding: 10,
  },
  buttonsMainContainer: {
    width: deviceSize.width / 2,
    position: 'relative',
    //flex: 0.5,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    //backgroundColor: LESSOPACITYCONTAINER,
    //elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
  hourglassContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0a500',
    elevation: 5,
  },
  hourglassIcon: {
    color: 'white',
  },
  checkContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007965',
    elevation: 5,
  },
  checkIcon: {
    color: 'white',
  },
});

const lobby_container_styles = StyleSheet.create({
  card: {
    margin: 5,
    marginTop: 7,
    marginBottom: 7,
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: deviceSize.width * 0.9,
    borderRadius: 10,
    backgroundColor: LESSOPACITYCONTAINER,
    borderWidth: 3,
    elevation: 5,
  },

  photo: {
    borderWidth: 2,
    borderColor: colors.BUTTON_DARK,
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 5,
  },
  displayNameContianer: {
    backgroundColor: '#efe2e0',
    flex: 1,
    marginLeft: 5,
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    elevation: 5,
  },
  displayName: {
    color: '#333',
    textAlign: 'center',
    fontFamily: differentFont,
    fontSize: 15,
  },
  photoMainContianer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
});

const room_screen_styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 10,
    padding: 10,
    width: Dimensions.get('window').width,
    marginTop: 5,
    zIndex: 1004,
  },
  logoContainer: {
    backgroundColor: 'rgba(250,250,250,0.1)',
    width: 55,
    height: 55,
    padding: 40,
    marginBottom: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 55,
    height: 55,
  },
  questionContainer: {
    backgroundColor: 'rgba(250,250,250, 0.5)',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  question: {
    textAlign: 'center',
  },
  callingContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 0,
    padding: 0,
  },
  rtcview1: {
    // flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(20,20,20, 0.2)',
    borderRadius: 5,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    bottom: 0,
    right: 0,

    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  rtc1: {
    //flex: 1,
    width: Dimensions.get('window').width * 1.55,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  rtcview2: {
    position: 'absolute',
    backgroundColor: 'rgba(250,200,20, 0.6)',
    borderRadius: 10,
    bottom: 110,
    right: 20,
    alignSelf: 'flex-end',
    zIndex: 100,
    borderRadius: 5,
    width: 200,
    height: 250,
  },

  rtc2: {
    width: 100,
    height: 300,
    margin: 5,
    borderRadius: 5,
  },

  gifArea: {
    position: 'relative',
    top: -40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(200,200,200, 1)',
    elevation: 5,
  },
  gif: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  gifText: {
    color: '#222',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  VolumeAndFlip: {
    backgroundColor: 'rgba(80,100, 180, 1)',
    width: deviceSize.width,
    position: 'absolute',
    zIndex: 1006,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  volumeButton: {
    backgroundColor: 'rgba(250,250,250, 0.5)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 15,
  },

  callButtons: {
    //height: deviceSize.height / 12,
    backgroundColor: 'rgba(80,100, 180, 1)',
    borderRadius: 10,
    width: deviceSize.width / 3,
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,

    position: 'absolute',
    zIndex: 1007,
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0,
    elevation: 10,
  },

  buttonCover: {
    backgroundColor: 'rgba(250,250,250, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1006,
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 15,
    paddingLeft: 10,
    paddingRight: 10,
    //marginRight: 40,
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
  lobby_screen_styles,
  lobby_container_styles,
  room_screen_styles,
  INPUTTEXT,
  ICONCOLOR,
};
