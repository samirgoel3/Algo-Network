import React from 'react';
import {Keyboard, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors, FONT, ICON_NAME, Screens, ICONS} from '../../Constants';
import Input from '../../common-components/Input';
import Button from '../../common-components/Button';
import Loader from '../../common-components/Loader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {actions} from '../../states/action-creators';
import Services from '../../network/services';
import {GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';


const LoginScreenScreen = ()=>{

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '975121093549-otk155p806v4k4aphj88l2b12udls1d2.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
        iosClientId: '975121093549-q4pn0odegkmdvg94vb5q97j9ld05168n.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });

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

    const performGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            alert(JSON.stringify(userInfo))
        } catch (error) {

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                dispatch(actions.ErrorDialogActions.showError({header:"Google Login Failed", description:"It seems like login is already in under process"}))
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                dispatch(actions.ErrorDialogActions.showError({header:"Google Login Failed", description:"Google play service is not available."}))
            } else if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // play services not available or outdated
                dispatch(actions.ErrorDialogActions.showError({header:"Google Login Failed", description:"Sign in Required"}))
            } else {
                dispatch(actions.ErrorDialogActions.showError({header:"Google Login Failed", description:"Unable to perform google login"}))

            }
        }
    };


    return(
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor:Colors.GREEN_BACKGROUND }}>
            <Loader visible={isLoading}/>
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

                    <TouchableOpacity style={{backgroundColor:Colors.LIGHT_GREY, padding:10, alignItems:'center', justifyContent:'center', borderRadius:50}} onPress={()=>{
                        performGoogleSignIn()
                    }}>
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
