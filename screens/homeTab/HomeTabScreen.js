import React from 'react';
import {Colors} from '../../Constants';
import RecenetChatList from './recent-chats/RecenetChatList';
import {ScrollView, View} from 'react-native';
import AlgosCategories from './algos-categories';
import LatestReleaseAlgos from './latest-release-alogs';
import Search from './serach';

const HomeTabScreen = ({navigation})=>{
    return(
        <View style={{ flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
            <ScrollView style={{flex:1, padding:10}} showsVerticalScrollIndicator={false}>
                <Search/>
                <AlgosCategories/>
                <RecenetChatList navigation={navigation}/>
                <LatestReleaseAlgos/>
                <View style={{height:120}}/>
            </ScrollView>

        </View>
    )
}

export default HomeTabScreen ;
