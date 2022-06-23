import React from 'react';
import {Keyboard, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors, FONT, ICON_NAME, Screens, ICONS} from '../../Constants';
import Input from '../../common-components/Input';
import Button from '../../common-components/Button';
import Loader from '../../common-components/Loader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {actions} from '../../states/action-creators';
import ErrorComponent from '../../common-components/ErrorComponent';
import Services from '../../network/services';

const LoginScreenScreen = ()=>{
    const navigation = useNavigation();

    const dispatch = useDispatch()
    // const notificationAction = bindActionCreators(actions.notificationActions, dispatch)
    // const authAction = bindActionCreators(actions.authenticationActions, dispatch)


    const [inputs, setInputs] = React.useState({
        email:"",
        password:""
    });
    const [error,setError] = React.useState({
        email:"",
        password:""
    })
    const [isLoading, setLoader] = React.useState(false);

    function handleInputs(text, inputKey){
        setInputs(prevState => ({...prevState, [inputKey]: text}))
        setError(prevState => ({...prevState, [inputKey]: ""}))
    }

    function handleError(text, errorKey){
        setError(prevState => ({...prevState, [errorKey]: text}))
    }

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            login();
        }
    };


    const handleOnSignUpClick = ()=>{
        navigation.navigate(Screens.SignUpScreen)
    }

    const login = async () => {

        try{
            setLoader(true)
            const response = await Services.LoginService.login({email:inputs.email, password:inputs.password})
            setLoader(false)
            if(!response){
                dispatch(actions.ErrorDialogActions.showNoDataFromApi())
            } else{
                if(response.data.result === 1){
                    dispatch(actions.authenticationActions.onLogin(response.data.response.username,response.data.response.email,response.data.response.image,response.data.response.token))
                } else{
                    dispatch(actions.ErrorDialogActions.showError({header:"Login Failed", description:""+response.data.message, show:true}))
                }
            }
        }catch (e){
            setLoader(false)
            dispatch(actions.ErrorDialogActions.showException(e.message))
        }
    };


    return(
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor:Colors.GREEN_BACKGROUND }}>
            <Loader visible={isLoading}/>
            <ErrorComponent/>
            <Text style={{color:'#ffffff', fontSize:35, fontFamily:FONT.EXTRA_BOLD, marginBottom:0, marginLeft:10}}>Login </Text>
            <Text style={{color:'#ffffff', fontSize:14, fontFamily:FONT.REGULAR, marginBottom:10, marginLeft:10}}>Enter your details below.</Text>
            <View style={{flex:0.9, width:'100%', backgroundColor:'#ffffff', borderTopLeftRadius:20, borderTopRightRadius:20, padding:15}}>

                <Input label={'Email'}
                       iconName={ICON_NAME.Mail}
                       error={error.email}
                       placeholder={'Enter Email'}
                       onChangeText={ (val)=>{ handleInputs(val,'email')}}
                />
                <Input label={'Password'}
                       iconName={ICON_NAME.Lock}
                       error={error.password}
                       password={true}
                       placeholder={'Enter your password'}
                       onChangeText={ (val)=>{ handleInputs(val,'password')}}
                />

                <TouchableOpacity onPress={()=>{ navigation.navigate(Screens.VerifyEmailScreen)}}>
                    <Text style={styles.forget_password}>Forget Password ?</Text>
                </TouchableOpacity>




                <Button title={'Login'}
                        onPress={()=>{handleOnContinue()}}/>

                <Text style={{alignSelf:'center', marginBottom:10, color:Colors.GREY}}>Or sign in with </Text>

                <View style={styles.social_container}>
                    <TouchableOpacity style={{backgroundColor:Colors.LIGHT_GREY, padding:10, alignItems:'center', justifyContent:'center', borderRadius:50, marginRight:20}}>
                        <ICONS.Facebook width={25} height={25}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:Colors.LIGHT_GREY, padding:10, alignItems:'center', justifyContent:'center', borderRadius:50}}>
                        <ICONS.Google width={25} height={25}/>
                    </TouchableOpacity>
                </View>


                <Text
                    style={{ fontFamily:FONT.REGULAR, color:Colors.GREY, fontSize:14, alignSelf:'center',marginBottom:20}}
                    onPress={()=>{handleOnSignUpClick()}}>
                    Don't have an account
                    <Text style={{fontFamily:FONT.BOLD, color:Colors.GREEN_BACKGROUND}}> Sign up</Text>
                </Text>

            </View>
        </View>
    )

    function handleOnContinue(){
        validate()
    }


}

const styles = StyleSheet.create({
    forget_password:{color:Colors.GREEN_BACKGROUND, fontFamily:FONT.EXTRA_BOLD, alignSelf:'flex-end'},
    sign_with_text: {
        color:Colors.GREY,
        alignSelf:'center'
    }, social_container: {
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop:10,
        justifyContent:'center',
        flex:1,
        marginBottom:50
    }, circular_button: {
        height:50,
        backgroundColor:Colors.GREY
    },


})

export default LoginScreenScreen ;
