import React from 'react';
import Constants from '../../../constants-data';
import {FlatList, Text, View} from 'react-native';
import ContactListItem from './ContactListItem'
import {FONT, Colors} from '../../../Constants';
const ContactOnNetworkList = ()=>{
    return (
        <View style={{flex:1, width:'100%', height:'60%', borderRadius:5,marginTop:15}}>
            <Text style={{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE}}>All Contacts on Network</Text>
            <FlatList data={Constants.MockData.contactOnNetwork} renderItem={(elements)=>{
                return (
                    <ContactListItem itemData={elements}/>
                )
            }} />

        </View>
    )
}



export default ContactOnNetworkList
