import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Colors, FONT, ICON_NAME, ICONS} from '../../Constants';
import Input from '../../common-components/Input';
import Button from '../../common-components/Button';
import {useNavigation} from '@react-navigation/native';
import ErrorComponent from '../../common-components/ErrorComponent';

const VerifyEmail = ({route})=>{

    const [error, setError] = React.useState();
    const navigation = useNavigation()

    return (<SafeAreaView style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
        {alert(""+route.params.reset_key)}
        <ErrorComponent/>
        <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
            <ICONS.BackArrowWhite width={20} height={20} marginRight={20} onPress={()=>{navigation.goBack()}}/>
            <Text style={{fontFamily:FONT.BOLD, color:Colors.WHITE, fontSize:35}}>Reset Password</Text>
        </View>


        <View style={{marginLeft:50, marginRight:30, marginTop:10}}>
            <Input label={' '}
                   iconName={ICON_NAME.Lock}
                   error={error}
                   password={true}
                   placeholder={'Enter new password'}
                   onChangeText={ (val)=>{ }}/>

            <Input label={' '}
                   iconName={ICON_NAME.Lock}
                   error={error}
                   password={true}
                   placeholder={'Confirm password'}
                   onChangeText={ (val)=>{ }}/>

            <Button title={'Reset Password'}
                    onPress={()=>{handleOnVerifyEmail(navigation)}}
                    backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} borderRadius={5} textColor={Colors.WHITE}/>
        </View>


    </SafeAreaView>)




}

const handleOnVerifyEmail = ()=>{
    alert('validate things ')
}

export default VerifyEmail;
