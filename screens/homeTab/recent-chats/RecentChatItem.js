import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MockData} from '../../../constants-data';
import {Colors, FONT, Screens} from '../../../Constants';

const RecentChatItem = ({itemData, navigation})=>{
    return(
        <TouchableOpacity style={{
            flexDirection:'row',
            height:80,
            backgroundColor:Colors.GREEN_BACKGROUND_LIGHT,
            borderRadius:9,
            marginBottom:10,
            justifyContent:'space-between',
            paddingHorizontal:10,
            alignItems:'center'}} onPress={()=>{navigation.navigate(Screens.ChatScreen)}}
        >
            <Image source={{uri:itemData.item.user_image}} style={{width:50, height:50, borderRadius:50, borderColor:'#ffffff', borderWidth:1}}/>
            <View style={{ flex:1, paddingHorizontal:10}}>
                <Text style={{fontFamily:FONT.BOLD, color:Colors.WHITE, fontSize:18}}>{itemData.item.name}</Text>
                <Text style={{fontFamily:FONT.SEMI_BOLD, color:Colors.GREY, fontSize:15}}>{itemData.item.last_message}</Text>
            </View>

            <View style={{ alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontFamily:FONT.REGULAR, color:Colors.GREY}}>{itemData.item.time}</Text>
                <View style={{backgroundColor:Colors.GREEN_LIGHT, borderRadius:50, padding:4, width:30, height:30, justifyContent:'center', alignItems:'center', marginTop:5}}>
                    <Text style={{color:Colors.GREEN_BACKGROUND, fontFamily:FONT.EXTRA_BOLD}}>4</Text>
                </View>
            </View>


        </TouchableOpacity>
    )
}

export default RecentChatItem;
