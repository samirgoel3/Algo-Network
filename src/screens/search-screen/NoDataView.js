import React from 'react';
import {Text, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
const NoDataView = ({message})=>{
    return( <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
        <ICONS.NoData width={20} height={20}/>
        <Text style={{fontSize:15, color:Colors.WHITE, fontFamily:FONT.BOLD,marginLeft:10}}>{message}</Text>
    </View>)
}
export default NoDataView;
