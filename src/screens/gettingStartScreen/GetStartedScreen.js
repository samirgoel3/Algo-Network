import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONT, Screens} from '../../Constants';
import remoteConfig from '@react-native-firebase/remote-config';
import crashlytics from '@react-native-firebase/crashlytics';



const GetStartScreen = (props)=>{

    useEffect(() => {
        crashlytics().log('App mounted.');
    }, []);


    return<View style={styles.rootView}>
        <ImageBackground style={{ width:'100%', height:'100%'}}
                         resizeMode={'cover'}
                         source={{uri:'https://i.ibb.co/jZVCLwW/splash-background.png'}}>
            <View style={{ position:'absolute', justifyContent:'center', top:"17%", left:'5%'}}>

                <Text style={{color:'#ffffff', fontSize:40, fontWeight:'100', fontFamily:'Nunito-Regular'}}>Connect to with your friends</Text>
                <Text style={{color:'#8ED25E', fontSize:45, fontWeight:'700', marginTop:10, fontFamily:FONT.EXTRA_BOLD}}>Algo Network</Text>
                <TouchableOpacity style={{ borderRadius:30, backgroundColor:'#8ED25E', paddingLeft:10, paddingRight:10, paddingTop:10, paddingBottom:10, width:180, marginTop:20, alignItems:'center'}}
                                  onPress={()=>{
                                      props.navigation.replace(Screens.LoginScreen)
                                  }}>
                    <Text style={{color:'#02191B', fontSize:25, fontWeight:'700', fontFamily:FONT.MEDIUM}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}

const test = async ()=>{
    const awesomeNewFeature = await remoteConfig().getValue('awesome_new_feature');
    alert(JSON.stringify(awesomeNewFeature))

}



const styles = StyleSheet.create({
    rootView: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },

});



export default GetStartScreen ;
