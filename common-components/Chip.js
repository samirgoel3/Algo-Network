import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../Constants';

const Chip = ({value, color})=>{
    return(
        <View style={{ borderRadius:15,
            backgroundColor:color?color:'#bbbbbb',
            paddingLeft:10,
            paddingRight:10,
            paddingTop:5,
            paddingBottom:5,
            marginRight:5
        }}>
            <Text style={{ fontSize:10, color:Colors.WHITE}}> {value}</Text>
        </View>
    );
}

export default Chip ;
