import {StyleSheet, Appearance,Dimensions} from 'react-native';
import colors from './colors';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
 const deviceSize=Dimensions.get('window');
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
    width:deviceSize.width%100,
    justifyContent: 'center',
    marginHorizontal: 88,
    marginVertical:20,
  },
  title: {
    color: '#fff',
    padding: 5,
    margin: 10,
    fontSize: 12,
    
  },
});

const beeButtonOutline_style = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 74,
    
  },
  title: {
    color: BACKGROUND,
    padding: 10,
    margin: 10,
    fontSize: 20,
    fontFamily: differentFont,
  },
});

const beeInput_styles=StyleSheet.create({
  container:{
    margin:5,

  },
  formContainer:{
    backgroundColor:'#fff',
    padding:2,
    borderRadius:5,
    width:deviceSize.width/1.5,
    height:deviceSize.height%90

  },
  errorText:{
    marginTop:2,
    color:'#FF0000',
    fontWeight:'bold'
  }

});

export {beeView_style, beeButton_style, beeButtonOutline_style,beeInput_styles};
