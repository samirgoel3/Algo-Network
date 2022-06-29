import React from 'react';
import {Text, View} from 'react-native';
import {Colors, FONT} from '../../Constants';

const AlgorithmSearchedView = ()=>{
    return(
        <View style={{marginTop:10, marginHorizontal:15}}>
            <View style={{backgroundColor:'#254444', borderRadius:5, width:'100%', padding:8}}>
                <Text style={{fontSize:15, fontFamily:FONT.REGULAR, color:Colors.WHITE}} numberOfLines={3} ellipsizeMode={'tail'}>A long problem statement will goes here accoridngly </Text>
                <View style={{flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>

                        <View style={{backgroundColor:Colors.GREEN_DARK, borderRadius:50, paddingVertical:3, paddingHorizontal:10}}>
                            <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:10}}>Level Moderate</Text>
                        </View>
                        <View style={{backgroundColor:Colors.MEDIUM, borderRadius:50, paddingVertical:3, paddingHorizontal:10, marginLeft:5}}>
                            <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:10}}>Type Array</Text>
                        </View>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default AlgorithmSearchedView;
