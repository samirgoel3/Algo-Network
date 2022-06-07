import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import ChatWindow from './ChatWindow';
import MessageInputView from './MessageInputView';


const ChatScreen = ({navigation})=>{

    const setHeader = ()=>{
        navigation.setOptions({
            headerLeft:()=>(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <ICONS.BackArrowWhite width={20} height={20} marginRight={10} onPress={()=>(navigation.goBack())}/>
                    <Image
                        source={{uri:'https://images.news18.com/ibnlive/uploads/2019/01/Pankaj-Tripathi-Feature.jpg'}}
                        style={{borderRadius:40, width:30, height:30}}
                    />
                    <View style={{marginLeft:5}}>
                        <Text style={styles.headerText}>Pankaj tripathi</Text>
                        <Text style={styles.headerDescription}>Last seen 08:34 PM on Mon 6 June</Text>
                    </View>

                </View>
            ),
            headerRight:()=>(null)
        })
    }

    const [messages, setMessages] = React.useState([
        {type:"SENDER", message:"Hello i am some sender", time:'Timestamp'},
    ])

    const handleOnSendButtonClick = (msg)=>{setMessages(prevState => [...messages, {type:"RECEIVER", message:msg, time:'Timestamp'}])}
    const handleOnSendButtonClickreceiver = (msg)=>{setMessages(prevState => [...messages, {type:"SENDER", message:msg, time:'Timestamp'}])}

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.rootScreen}>
                {setHeader()}
                <ChatWindow messages={messages}/>
                <MessageInputView onSendClick={(message)=>{ handleOnSendButtonClick(message)}}/>
                <MessageInputView onSendClick={(message)=>{ handleOnSendButtonClickreceiver(message)}}/>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    headerText:{
        fontSize:15,
        color:Colors.WHITE,
        fontFamily:FONT.BOLD
    },
    headerDescription: {
        color:Colors.GREY,
        fontFamily:FONT.REGULAR,
        fontSize:10,
    }, rootScreen: {
        backgroundColor:Colors.GREEN_BACKGROUND,
        flex:1
    },

})


export default ChatScreen;

