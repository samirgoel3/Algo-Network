import React from 'react';
import Constants from '../../../constants-data';
import {FlatList, Text, View} from 'react-native';
import RecentChatItem from './RecentChatItem';
import {FONT, Colors} from '../../../Constants';
const RecentChatList = ({navigation})=>{
    return (
        <View style={{flex:1, width:'100%', height:'60%', borderRadius:5,marginTop:15}}>
            <Text style={{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE}}> Recent Chats</Text>
            <View>
                {Constants.MockData.recentChats.map((item, index)=>{
                    return (
                        <View key={index}>
                            <RecentChatItem itemData={item} navigation={navigation}/>
                        </View>
                    )
                })}
            </View>

        </View>
    )
}



export default RecentChatList
