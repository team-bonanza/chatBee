import React from 'react';
import { View } from 'react-native';


function BeeView({children}){
    return(
        <View>
            {children}
        </View>

    );
}

export {BeeView};