import React from 'react';
import {ProgressBar} from 'react-native-paper';
import {Colors} from '../../Constants';
import {View} from 'react-native';
const ProgressView = ()=>{
    return(<View style={{marginHorizontal:65}}>
        <ProgressBar color={Colors.WHITE} indeterminate/>
    </View>)
}
export default ProgressView;
