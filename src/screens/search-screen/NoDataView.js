import React from 'react';
import {Text, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
const NoDataView = ()=>{
    return( <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
        <ICONS.NoData width={20} height={20}/>
        <Text style={{fontSize:15, color:Colors.WHITE, fontFamily:FONT.BOLD,marginLeft:10}}>Sorry No Data Found</Text>
    </View>)
}
export default NoDataView;
