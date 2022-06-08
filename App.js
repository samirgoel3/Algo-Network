/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';
import AuthStack from './navigations/AuthStack';
import AppStack from './navigations/AppStack';
import MyContext from './context';

const App: () => Node = () => {

    const [isLoading, setLoading] = React.useState(true)
    const [isLoggedIn, setLogin] = React.useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])

    const authContext = React.useMemo(()=>(
        {
            onSignIn: ()=>{
                setLoading(false)
                setLogin(true)
            },
            onLogOut: ()=>{
                setLoading(false)
                setLogin(false)
            },
            onSignUp: ()=>{
                setLoading(false)
                setLogin(true)
            }
        }
    ))


    if(isLoading){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }


    return (
        <MyContext.AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {isLoggedIn? <AppStack/>:<AuthStack/> }
            </NavigationContainer>
        </MyContext.AuthContext.Provider>

    );
};


export default App;
