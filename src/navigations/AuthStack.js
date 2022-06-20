import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../Constants';
import GetStartedScreen from '../screens/gettingStartScreen/GetStartedScreen';
import SignUpScreen from '../screens/signupScreen/SignUpScreen';
import LoginScreen from '../screens/loginScreen';
import VerifyEmailScreen from '../screens/verify-email';
import ResetPasswordScreen from '../screens/reset-password-screen';

const AuthStack = ()=>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={Screens.GetStartedScreen}>
            <Stack.Screen name={Screens.GetStartedScreen} component={GetStartedScreen} options={{headerShown:false}}/>
            <Stack.Screen name={Screens.SignUpScreen} component={SignUpScreen} options={{headerShown:false}}/>
            <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name={Screens.VerifyEmailScreen} component={VerifyEmailScreen} options={{headerShown:false}}/>
            <Stack.Screen name={Screens.ResetPassword} component={ResetPasswordScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default AuthStack
