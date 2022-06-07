import React from 'react';
import {Image, Text, View} from 'react-native';
import {Colors, FONT} from '../../../Constants';

const ContactChatItem = ({itemData})=>{
    return(
        <View style={{
            flexDirection:'row',
            height:80,
            backgroundColor:Colors.GREEN_BACKGROUND_LIGHT,
            borderRadius:9,
            marginBottom:10,
            justifyContent:'space-between',
            paddingHorizontal:10,
            alignItems:'center'}}>
            <Image source={{uri:itemData.item.user_image}} style={{width:50, height:50, borderRadius:50, borderColor:'#ffffff', borderWidth:1}}/>
            <View style={{ flex:1, paddingHorizontal:10}}>
                <Text style={{fontFamily:FONT.BOLD, color:Colors.WHITE, fontSize:18}}>{itemData.item.name}</Text>
                {itemData.item.last_message?
                <Text style={{fontFamily:FONT.SEMI_BOLD, color:Colors.GREY, fontSize:13}} numberOfLines={2} ellipsizeMode={'tail'}> {itemData.item.last_message}</Text>:null}
            </View>

            <View style={{ alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontFamily:FONT.REGULAR, color:Colors.GREY}}>{itemData.item.time}</Text>

            </View>


        </View>
    )
}

export default ContactChatItem;
