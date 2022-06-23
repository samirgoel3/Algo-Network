import AsyncStorage from '@react-native-async-storage/async-storage';

const onLogin = (userName, email, userImage, token)=>{
    return async (dispatch) =>{
        await AsyncStorage.setItem('user_name',userName);
        await AsyncStorage.setItem('user_image',userImage);
        await AsyncStorage.setItem('email',email);
        await AsyncStorage.setItem('token',token);
        dispatch({
            type:'login',
            payload:{
                user_name:userName,
                user_image:userImage,
                email:email,
                token:token
            }
        })
    }
}

const onSignUp = (userName, email, userImage, token)=>{
    return async (dispatch) =>{
        await AsyncStorage.setItem('user_name',userName);
        await AsyncStorage.setItem('user_image',userImage);
        await AsyncStorage.setItem('email',email);
        await AsyncStorage.setItem('token',token);
        dispatch({
            type:'signup',
            payload:{
                user_name:userName,
                user_image:userImage,
                email:email,
                token:token
            }
        })
    }
}

const onSignOut = ()=>{
    return async (dispatch) =>{
        await AsyncStorage.setItem('token','');
        dispatch({
            type:'sign-out',
            payload:{
                user_name:'',
                user_image:'',
                email:'',
                token:''
            }
        })
    }
}

const checkLogin = () =>{
    return async (dispatch)=>{
        const data = await AsyncStorage.getItem('token')
        dispatch({
            type:'check-login',
            payload:{
                token:data?data:''
            }
        })
    }
}


export default {onLogin, onSignUp, onSignOut, checkLogin}
