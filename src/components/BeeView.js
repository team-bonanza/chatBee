import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {beeView_style} from '../assets/styles'


function BeeView({children}){
    return(
        <LinearGradient style={beeView_style.container} >
            {children}
        </LinearGradient>
    );
}

export {BeeView};