import React from 'react';
import {Keyboard, Text, View, StyleSheet} from 'react-native';
import {Colors, FONT, ICON_NAME, Screens} from '../../Constants';
import Input from '../../common-components/Input';
import Button from '../../common-components/Button';
import Loader from '../../common-components/Loader';

const LoginScreenScreen = ({navigation})=>{

    const [inputs, setInputs] = React.useState({
        email:"",
        username:"",
        password:""
    });
    const [error,setError] = React.useState({
        email:"",
        username:"",
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

    const handleOnSignUpClick = ()=>{
        navigation.navigate(Screens.SignUpScreen)
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

        if (!inputs.username) {
            handleError('Please input full name', 'username');
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
            register();
        }
    };

    const register = () => {

        setLoader(true)
        setTimeout(() => {
            try {
                setLoader(false);
                navigation.replace(Screens.TabScreen);
            } catch (error) {
                alert('Error', 'Something went wrong');
            }
        }, 1000);
    };


    return(
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor:Colors.GREEN_BACKGROUND }}>
            <Loader visible={isLoading}/>
            <Text style={{color:'#ffffff', fontSize:35, fontFamily:'Nunito-ExtraBold', marginBottom:0, marginLeft:10}}>Login </Text>
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
                       placeholder={'Create Password'}
                       onChangeText={ (val)=>{ handleInputs(val,'password')}}
                />


                <Button title={'Login'}
                        onPress={()=>{ handleOnContinue()}}/>

                <Text
                    style={{ fontFamily:FONT.REGULAR, color:Colors.GREY, fontSize:14, alignSelf:'center'}}
                    onPress={()=>{handleOnSignUpClick()}}>
                    Don't have an account
                    <Text style={{fontFamily:FONT.BOLD, color:Colors.GREEN_BACKGROUND}}>Sign up</Text>
                </Text>

            </View>
        </View>
    )

    function handleOnContinue(){
        validate()
    }
}


export default LoginScreenScreen ;
