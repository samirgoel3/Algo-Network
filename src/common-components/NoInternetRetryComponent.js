import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, ICONS} from '../Constants';

const NoInternetRetryComponent = ({onRetryClick=()=>{}, error})=>{
    return(
        <View style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND, alignItems:'center', justifyContent:'center' }}>
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <ICONS.NoInternet width={50} height={50} marginBottom={10}/>
                <Text style={{color:Colors.WHITE, marginBottom:10, fontSize:15, fontFamily:FONT.BOLD }}>Something Went Wrong</Text>
                <Text style={{color:Colors.WHITE, marginBottom:10, fontSize:15, fontFamily:FONT.REGULAR }}>{error}</Text>
            </View>

            <TouchableOpacity style={{paddingHorizontal:80, paddingVertical:15, backgroundColor:Colors.GREEN_MUTED, borderRadius:40}} onPress={()=>{onRetryClick()}}>
                <Text style={{ color:Colors.WHITE, fontFamily:FONT.BOLD, letterSpacing:5, textTransform:'uppercase'}}>Retry</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoInternetRetryComponent;
