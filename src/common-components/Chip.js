import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Colors, FONT} from '../Constants';

const Chip = ({value, color, textColor, onPress = () => {}})=>{
    return(
        <TouchableOpacity style={{ borderRadius:15,
            backgroundColor:color?color:'#bbbbbb',
            paddingLeft:10,
            paddingRight:10,
            paddingTop:5,
            paddingBottom:5,
            marginRight:5
        }} onPress={onPress} activeOpacity={0.8}>
            <Text style={{ fontSize:13, color:textColor?textColor:Colors.WHITE, fontFamily:FONT.REGULAR}}> {value}</Text>
        </TouchableOpacity>
    );
}

export default Chip ;
