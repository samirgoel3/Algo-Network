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
import {Provider} from 'react-redux';
import {store} from './states';

const App: () => Node = () => {

    const [isLoading, setLoading] = React.useState(true)
    const [isLoggedIn, setLogin] = React.useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
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
        <Provider store={store}>
            <NavigationContainer>
                {isLoggedIn? <AppStack/>:<AuthStack/> }
            </NavigationContainer>
        </Provider>

    );
};

export default App;
