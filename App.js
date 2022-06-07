/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import GetStartedScreen from './screens/gettingStartScreen/GetStartedScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/signupScreen/SignUpScreen';
import TabScreen from './navigations/TabScreen';
import {Colors, FONT, ICONS, Screens} from './Constants';
import {Text} from 'react-native';
import ChatScreen from './screens/chat-screen';
import LoginScreen from './screens/loginScreen';


const App: () => Node = () => {

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={Screens.GetStartedScreen} screenOptions={{
                headerStyle: {backgroundColor: Colors.GREEN_BACKGROUND},
                headerRight: () => (<ICONS.NotificationBell onPress={() => alert('This is a button!')} width={20} height={20} color='#fff'/>),
                headerLeft: () => (<Text style={{color: Colors.GREEN_LIGHT, fontFamily: FONT.EXTRA_BOLD, fontSize: 20}} onPress={() => alert('This is Algo Network')} > Algo Network</Text>),
            }}>
                <Stack.Screen name={Screens.GetStartedScreen} component={GetStartedScreen} options={{headerShown:false}}/>
                <Stack.Screen name={Screens.SignUpScreen} component={SignUpScreen} options={{headerShown:false}}/>
                <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} options={{headerShown:false}}/>
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
        </NavigationContainer>
    );
};


export default App;
