import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Constants';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import notificationActions from '../../states/action-creators';

const SettingsTabScreen = ()=>{
    const dispatch = useDispatch()
    const action = bindActionCreators(notificationActions, dispatch)
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:Colors.GREY}}>
            <TouchableOpacity style={{ backgroundColor:Colors.GREEN_BACKGROUND, borderRadius:5, padding:15}}
                              onPress={()=>{ action.updateNotificationCount(3) }}>
                <Text> SettingsTabScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsTabScreen ;
