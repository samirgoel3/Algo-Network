import React from 'react';
import {ScrollView, View} from 'react-native';
import SenderMessageView from './messages/SenderMessageView';
import ReceiverMessageView from './messages/ReceiverMessageView';
import {Colors} from '../../Constants';


const ChatWindow = ({messages})=>{

    return (
        <View style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                { messages.map((item, index)=>{
                    if(item.type == 'SENDER'){
                        return (
                            <View key={index}><SenderMessageView element={item}/></View>

                        )}
                    else if(item.type === 'RECEIVER' ){
                        return(
                            <View key={index}><ReceiverMessageView element={item}/></View>
                        )}
                })}
            </ScrollView>
        </View>
    )
}

export default ChatWindow;
