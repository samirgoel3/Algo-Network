import React from 'react';
import {Keyboard, SafeAreaView, Text, View} from 'react-native';
import {Colors, FONT, ICON_NAME, ICONS, Screens} from '../../Constants';
import Input from '../../common-components/Input';
import Button from '../../common-components/Button';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../common-components/Loader';
import Services from '../../network/services';
import {useDispatch} from 'react-redux';
import {actions} from '../../states/action-creators';

const VerifyEmail = ()=>{

    const [error, setError] = React.useState();
    const navigation = useNavigation()
    const [isLoading, setLoading] = React.useState(false);
    const [inputs, setInputs] = React.useState("");
    const dispatch = useDispatch()


    function handleInputs(text){
        setInputs(text)
        setError( "")
    }

    const fetchEmailVerification = async  (email)=>{
        try{
            setLoading(true)
            const data = await Services.LoginService.checkEmail(email)
            setLoading(false)
            if(!data){
                dispatch(actions.ErrorDialogActions.showNoDataFromApi())
            }else{
                if(data.data.result === 1){
                    navigation.replace(Screens.ResetPassword, {reset_key:data.data.response.reset_key})
                }else{
                    dispatch(actions.ErrorDialogActions.showError({header:"Verification Failed", description:""+data.data.message, show:true}))
                }
            }

        }catch (e){
            dispatch(actions.ErrorDialogActions.showException(e.message))
            setLoading(false)

        }

    }

    const handleOnVerifyEmail =  ()=>{
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs) {
            setError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.match(/\S+@\S+\.\S+/)) {
            setError('Please input a valid email', 'email');
            isValid = false;
        }

        if (isValid) {
            fetchEmailVerification(inputs)
        }
    }





    return (<SafeAreaView style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
        <Loader visible={isLoading}/>
        <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
            <ICONS.BackArrowWhite width={20} height={20} marginRight={20} onPress={()=>{navigation.goBack()}}/>
            <Text style={{fontFamily:FONT.BOLD, color:Colors.WHITE, fontSize:35}}>Verify Email</Text>
        </View>

        <Text style={{color:Colors.WHITE, marginLeft:50}}>Please enter your email address to verify you account first.</Text>

        <View style={{marginLeft:50, marginRight:30, marginTop:10}}>
            <Input label={' '}
                   iconName={ICON_NAME.Mail}
                   error={error}
                   placeholder={'Enter Email'}
                   onChangeText={ (val)=>{ handleInputs(val,'email')}}/>


            <Button title={'Verify Email'}
                    onPress={()=>{handleOnVerifyEmail()}}
                    backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} borderRadius={5} textColor={Colors.WHITE}/>
        </View>
    </SafeAreaView>)
}



export default VerifyEmail;
