import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors, FONT, ICONS, Screens} from '../Constants';
import {Text} from 'react-native';
import TabScreen from './TabScreen';
import ChatScreen from '../screens/chat-screen';

const AppStack = ({navigation})=>{
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
            initialRouteName={Screens.TabScreen}
            screenOptions={{
            headerStyle: {backgroundColor: Colors.GREEN_BACKGROUND},
            headerRight: () => (<ICONS.NotificationBell onPress={() => alert('This is a button!')} width={20} height={20} color='#fff'/>),
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
