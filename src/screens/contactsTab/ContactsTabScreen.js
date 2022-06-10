import React from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from '../../Constants';
import Search from './serach';
import ContactOnNetworkList from './contactOnNetworkList';


const ContactsTabScreen = ()=>{
    return(
        <View style={{ flex:1, backgroundColor:Colors.GREEN_BACKGROUND, padding:10}}>

                <Search/>
                <ContactOnNetworkList/>
                <View style={{height:80}}/>

        </View>
    )
}

export default ContactsTabScreen ;
