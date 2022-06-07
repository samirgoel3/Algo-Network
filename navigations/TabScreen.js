import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeTabScreen from '../screens/homeTab/HomeTabScreen';
import ContactsTabScreen from '../screens/contactsTab/ContactsTabScreen';
import SettingsTabScreen from '../screens/settingsTab/SettingsTabScreen';
import FavouriteTabScreen from '../screens/favouriteTab';
import {Colors, HomeScreenTabs, ICONS} from '../Constants';

const Tabs = ({navigation})=>{
    const Tab = createMaterialBottomTabNavigator();

    return(
        <Tab.Navigator
            activeColor={Colors.GREEN_LIGHT}
            inactiveColor={Colors.GREY}
            labeled={false}
            barStyle={{ backgroundColor: Colors.GREEN_BACKGROUND_LIGHT_TAB,
                borderWidth:5,
                borderColor:Colors.GREEN_BACKGROUND_LIGHT_TAB,
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                marginLeft:10,
                marginRight:10, position:'absolute'}}>


            <Tab.Screen name={HomeScreenTabs.HOME}
                        options={{tabBarIcon:({focused})=>(
                                focused?<View><ICONS.HomeTabSelected width={30} height={30}/></View>:
                                    <View><ICONS.HomeTabUnSelected width={30} height={30}/></View>
                            )}}
                        component={HomeTabScreen}  />


            <Tab.Screen name={HomeScreenTabs.CONTACTS}
                        options={{tabBarIcon:({focused})=>(
                                focused?<View><ICONS.UserTabSelected width={30} height={30}/></View>:
                                    <View><ICONS.User width={30} height={30}/></View>
                            )}}
                        component={ContactsTabScreen}  />

            <Tab.Screen name={HomeScreenTabs.FAVOURITE}
                        options={{tabBarIcon:({focused})=>(
                                focused?<View><ICONS.StarSelected width={30} height={30}/></View>:
                                    <View><ICONS.StartUnselected width={30} height={30}/></View>
                            )}}
                        component={FavouriteTabScreen}  />

            <Tab.Screen name={HomeScreenTabs.SETTINGS}
                        options={{tabBarIcon:({focused})=>(
                                focused?<View><ICONS.SettingsTabSelected width={30} height={30}/></View>:
                                    <View><ICONS.SettingsTabUnSelected width={30} height={30}/></View>
                            )}}
                        component={SettingsTabScreen}  />




        </Tab.Navigator>
    );
}

export default Tabs;


