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
import {Provider} from 'react-redux';
import {store} from './src/states';
import remoteConfig from '@react-native-firebase/remote-config';
import OneSignal from 'react-native-onesignal';
import analytics from '@react-native-firebase/analytics';
import ErrorComponent from './src/common-components/ErrorComponent';


const App: () => Node = () => {


    useEffect(() => {

        // One signal configuration
        OneSignal.setLogLevel(6, 0);
        OneSignal.setAppId("12be9f33-4b81-47ee-8bb3-eeafb7be360f");

        //Prompt for push on iOS
        OneSignal.promptForPushNotificationsWithUserResponse(response => {
            console.log("Prompt response:", response);
        });

        //Method for handling notifications received while app in foreground
        OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
            console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
            let notification = notificationReceivedEvent.getNotification();
            console.log("notification: ", notification);
            const data = notification.additionalData
            console.log("additionalData: ", data);
            // Complete with null means don't show a notification.
            notificationReceivedEvent.complete(notification);
        });

        //Method for handling notifications opened
        OneSignal.setNotificationOpenedHandler(notification => {
            console.log("OneSignal: notification opened:", notification);
        });



        // Firebase configuration
        const remote = remoteConfig();
        remote.setConfigSettings({minimumFetchIntervalMillis: 60,})
            .then(()=>{console.log("refresh interval for 1 minute is set for firebase")})
        remote.setDefaults({awesome_new_feature: 'something else',})
            .then(() => {console.log('Default values set.');});
    }, []);


    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

    return (
        <Provider store={store}>

            <NavigationContainer
                ref={navigationRef}
                // onReady={()=>{alert(navigationRef.current.getCurrentRoute().name)}}
                // onReady={() => {routeNameRef.current = navigationRef.current.getCurrentRoute().name;}}
                onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.current.getCurrentRoute().name;
                if (previousRouteName !== currentRouteName) {
                    await analytics().logScreenView({
                        screen_name: currentRouteName,
                        screen_class: currentRouteName,
                    });
                }
                routeNameRef.current = currentRouteName;
            }}
            >
                <ErrorComponent/>
                <OverAllStack/>
            </NavigationContainer>
        </Provider>


    );
};

export default App;
