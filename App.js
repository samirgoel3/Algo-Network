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
import OverAllStack from './src/navigations';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/states';


const App: () => Node = () => {





    return (
        <Provider store={store}>
            <NavigationContainer>
                <OverAllStack/>
            </NavigationContainer>
        </Provider>

    );
};

export default App;
