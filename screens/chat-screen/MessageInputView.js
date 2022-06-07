import React from 'react';
import {TextInput, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Colors, ICONS} from '../../Constants';
const MessageInputView = ({ onSendClick,  ...props})=>{

    const [message, setMessage] = React.useState("")

    return (
        <View style={styles.inputRootLayout}>
            <TextInput
                style={styles.inputStyle}
                placeholder={'Enter your message'}
                placeholderTextColor={Colors.GREY}
                value={message}
                onChangeText={ (val)=>{ setMessage(val)}}
                {...props}

            />
            <TouchableOpacity
                style={{backgroundColor:Colors.GREEN_BACKGROUND_LIGHT, padding:13, borderRadius:20}}
                onPress={()=>{ onSendClick(message); setMessage("")}}
            >
                <ICONS.Send  width={20} height={20} />
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    inputStyle:{flex:1, color:Colors.WHITE, height:50},
    inputRootLayout:{ borderRadius:30, borderWidth:1, borderColor:Colors.GREY, height:55, margin:10, flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, paddingRight:6}
})

export default MessageInputView
