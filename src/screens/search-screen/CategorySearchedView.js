import React from 'react';
import {Text, View} from 'react-native';
import {Colors, FONT} from '../../Constants';


const CategorySearchedView = ()=>{
    return (
        <View style={{flexDirection:'row', alignItems:'center', marginTop:10, marginHorizontal:15}}>
            <View style={{padding:10, backgroundColor:Colors.GREEN_BACKGROUND_LIGHT, alignItems:'center', borderRadius:6, justifyContent:'center'}}>
                <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:10}}>Array</Text>
            </View>
            <View>
                <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:15, marginLeft:10}}>Find all algos in Array</Text>
            </View>

        </View>
    )
}

export default CategorySearchedView;
