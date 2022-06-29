import React from 'react';
import {Keyboard, SafeAreaView, Text, View} from 'react-native';
import {Colors, FONT, ICON_NAME, ICONS} from '../../Constants';
import Input from '../../common-components/Input';
import Button from '../../common-components/Button';
import {useNavigation} from '@react-navigation/native';
import Services from '../../network/services';
import {actions} from '../../states/action-creators';
import {useDispatch} from 'react-redux';
import Loader from '../../common-components/Loader';

const VerifyEmail = ({route})=>{

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [inputs, setInputs] = React.useState({password:"", confirm_password:""});
    const [error,setError] = React.useState({password:"", confirm_password:""})
    const [apiResponse, setApiResponse] = React.useState({loading:false, errorMessage:null, data:null})

    const handleInputs = (key, value)=>{
        setInputs(prevState => ({...prevState, [key]: value}))
        handleError(key, "");
    }

    function handleError(key, error){
        setError(prevState => ({...prevState, [key]: error}))
    }

    const handleOnVerifyEmail = ()=>{
        try{
            Keyboard.dismiss();
            let isValid = true;

            if (!inputs.password  ) {
                handleError('password', "Please input your password")
                isValid = false;
            } if (!inputs.confirm_password ) {
                handleError('confirm_password', "Please Enter you password to confirm")
                isValid = false;
            }else{
              if(inputs.password.length < 7){
                  handleError('confirm_password', "Please enter at-least 6 digit password")
                  isValid = false;
              }
              else if (inputs.password !== inputs.confirm_password) {
                  handleError('confirm_password', "Please check you password, It seems you have entered different one")
                  isValid = false;
              }

                if (isValid) {
                    fetchResetPassword()
                }
            }
        }catch (e){
            dispatch(actions.ErrorDialogActions.showException(e.message))
        }

    }


    const fetchResetPassword = async  ()=>{
        try{
            setApiResponse({loading:true, errorMessage:null,data: null})
            const response = await Services.LoginService.getResetClient(inputs.password,route.params.reset_key)
            if(!response){
                setApiResponse({loading:false, errorMessage:"Problem in Api Response",data: null})
                dispatch(actions.ErrorDialogActions.showNoDataFromApi)
            }else{
                if(response.data.result === 1){
                    setApiResponse({loading:false, errorMessage:null,data: response.data.response})
                    navigation.goBack()
                }else{
                    setApiResponse({loading:false, errorMessage:null,data: null})
                    if(response.data.response == "jwt expired"){
                        dispatch(actions.ErrorDialogActions.showError({header:"Reset Password Failed", description: "Seems your reset password time is expired"}))
                    }else{
                        dispatch(actions.ErrorDialogActions.showError({header:"Reset Password Failed", description:""+response.data.response}))
                    }

                }
            }

        }catch (e){
            setApiResponse({loading:false, errorMessage:e.message,data: null})
            dispatch(actions.ErrorDialogActions.showException(""+e.message))
        }

    }




    return (<SafeAreaView style={{flex:1, backgroundColor:Colors.GREEN_BACKGROUND}}>
        <Loader visible={apiResponse.loading}/>
        <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
            <ICONS.BackArrowWhite width={20} height={20} marginRight={20} onPress={()=>{navigation.goBack()}}/>
            <Text style={{fontFamily:FONT.BOLD, color:Colors.WHITE, fontSize:35}}>Reset Password</Text>
        </View>

        <View style={{marginLeft:50, marginRight:30, marginTop:10}}>
            <Input label={' '}
                   iconName={ICON_NAME.Lock}
                   error={error.password}
                   password={true}
                   placeholder={'Enter new password'}
                   onChangeText={ (val)=>{ handleInputs('password', val)}}/>

            <Input label={' '}
                   iconName={ICON_NAME.Lock}
                   error={error.confirm_password}
                   password={true}
                   placeholder={'Confirm password'}
                   onChangeText={ (val)=>{ handleInputs('confirm_password', val)}}/>

            <Button title={'Reset Password'}
                    onPress={()=>{handleOnVerifyEmail()}}
                    backgroundColor={Colors.GREEN_BACKGROUND_LIGHT} borderRadius={5} textColor={Colors.WHITE}/>
        </View>


    </SafeAreaView>)




}


export default VerifyEmail;
