import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Colors, FONT} from '../../../Constants';
const ReceiverMessageView = ({element})=>{
    return (
        <View style={styles.rootView}>

            <View style={styles.messageBoxStyle}>
                <Text style={styles.messageTextStyle}>{element.message}</Text>
                <Text style={styles.timeText}>07:23 PM</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    rootView:{
        flexDirection:'row',
        margin:10,
        alignItems:'center',
        justifyContent:'flex-end',
        paddingRight:10,
        flex:1,
    },
    imageStyler:{borderRadius:40, width:30, height:30},
    messageBoxStyle: {
        backgroundColor:'#294740',
        color:Colors.GREEN_DARK,
        marginLeft:5,
        padding:5,
        borderRadius: 5,
        alignItems:'flex-end'
    },
    messageTextStyle: {
        fontFamily:FONT.REGULAR,
        color: Colors.WHITE
    },
    timeText:{
        fontFamily:FONT.SEMI_BOLD,
        color: Colors.WHITE,
        marginTop:5,
        fontSize:12
    }

})

export default ReceiverMessageView;
