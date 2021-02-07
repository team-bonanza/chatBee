import {StyleSheet,Appearance} from 'react-native';
import colors from './colors';

const theme=Appearance.getColorScheme();
const BACKGROUND=theme==='dark' ? colors.BACKGROUND_DARK: colors.BACGROUND_LIGHT;
const TEXT=theme==='dark' ? colors.WHITE:colors.BLACK;

const beeView_style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:BACKGROUND,

    },
    
})
export {beeView_style}