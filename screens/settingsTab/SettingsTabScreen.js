import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Constants';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../../states/action-creators';

const SettingsTabScreen = ()=>{
    const dispatch = useDispatch()
    // const notificationAction = bindActionCreators(actions.notificationActions, dispatch)
    // const authAction = bindActionCreators(actions.authenticationActions, dispatch)
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:Colors.GREY}}>
            <TouchableOpacity style={{ backgroundColor:Colors.GREEN_BACKGROUND, borderRadius:5, padding:15}}
                              onPress={()=>{ dispatch(actions.notificationActions.updateNotificationCount(36)) }}>
                <Text> SettingsTabScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor:Colors.GREEN_BACKGROUND, borderRadius:5, padding:15, color:Colors.WHITE}}
                              onPress={()=>{ dispatch(actions.authenticationActions.onSignOut())}}>
                <Text> Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsTabScreen ;
