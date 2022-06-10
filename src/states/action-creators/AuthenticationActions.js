import AsyncStorage from '@react-native-async-storage/async-storage';

const onLogin = (email, password)=>{
    return async (dispatch) =>{
        const mToken = email+"_"+password
        await AsyncStorage.setItem('token',mToken);
        dispatch({
            type:'login',
            payload:{
                token:""+mToken
            }
        })
    }
}

const onSignUp = (email, password)=>{
    return async (dispatch) =>{
        const mToken = email+"_"+password
        await AsyncStorage.setItem('token',mToken);
        dispatch({
            type:'signup',
            payload:{
                token:""+mToken
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
                token:''
            }
        })
    }
}

const checkLogin = () =>{
    console.log("Check login ...")
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
