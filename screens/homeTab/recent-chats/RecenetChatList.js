import React from 'react';
import Constants from '../../../constants-data';
import {FlatList, Text, View} from 'react-native';
import RecentChatItem from './RecentChatItem';
import {FONT, Colors} from '../../../Constants';
const RecentChatList = ({navigation})=>{
    return (
        <View style={{flex:1, width:'100%', height:'60%', borderRadius:5,marginTop:15}}>
            <Text style={{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE}}> Recent Chats</Text>
            <FlatList data={Constants.MockData.recentChats} renderItem={(elements)=>{
                return (
                    <RecentChatItem itemData={elements} navigation={navigation}/>
                )
            }} />
        </View>
    )
}



export default RecentChatList
