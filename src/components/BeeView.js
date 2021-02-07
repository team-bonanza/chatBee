import React from 'react';
import { View } from 'react-native';
import {beeView_style} from '../assets/styles'


function BeeView({children}){
    return(
        <View style={beeView_style.container}>
            {children}
        </View>
    );
}

export {BeeView};