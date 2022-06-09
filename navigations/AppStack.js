import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors, FONT, ICONS, Screens} from '../Constants';
import {Text, View} from 'react-native';
import TabScreen from './TabScreen';
import ChatScreen from '../screens/chat-screen';
import {useSelector} from 'react-redux';

const AppStack = ()=>{
    const Stack = createNativeStackNavigator();
    const stateData = useSelector(state => state)

    return(
        <Stack.Navigator
            initialRouteName={Screens.TabScreen} screenOptions={{
            headerStyle: {backgroundColor: Colors.GREEN_BACKGROUND},
            headerRight: () => (
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <ICONS.NotificationBell onPress={() => alert('This is a button!')} width={20} height={20} color='#fff'/>
                    <Text style={{color:Colors.WHITE, fontFamily:FONT.BOLD, fontSize:15}}>{stateData.notification}</Text>
                </View>

            ),
            headerLeft: () => (<Text style={{color: Colors.GREEN_LIGHT, fontFamily: FONT.EXTRA_BOLD, fontSize: 20}} onPress={() => alert('This is Algo Network')} > Algo Network</Text>),
        }}>
            <Stack.Screen name={Screens.TabScreen}
                          component={TabScreen}
                          options={{headerShown:true, headerTitle:'',}}
            />
            <Stack.Screen
                name={Screens.ChatScreen}
                component={ChatScreen}
                options={{
                    headerShown:true,
                    headerTitle:''}}/>
        </Stack.Navigator>
    )
}

export default AppStack
