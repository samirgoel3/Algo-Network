import {act} from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    user_name:'',
    user_image:'',
    email:'',
    token:''
}

const AuthReducer = (state = initialState, action)=>{
    if(action.type === 'login'){
        return {
            ...initialState,
            user_name:action.payload.user_name,
            user_image:action.payload.user_image,
            email:action.payload.email,
            token:action.payload.token
        };
    }if(action.type === 'signup'){
        return {
            ...initialState,
            user_name:action.payload.user_name,
            user_image:action.payload.user_image,
            email:action.payload.email,
            token:action.payload.token
        };
    }if(action.type === 'sign-out'){
        return {
            ...initialState,
            token:''
        };
    }if(action.type === 'check-login'){
        return {
            ...initialState,
            token:action.payload.token
        };
    }else{
        return state;
    }
}

export default AuthReducer;
