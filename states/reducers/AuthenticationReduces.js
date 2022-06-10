import {act} from 'react-test-renderer';


const initialState = {
    username:'',
    userEmail:'',
    password:'',
    token:''
}

const AuthReducer = (state = initialState, action)=>{
    if(action.type === 'login'){
        return {
            ...initialState,
            token:action.payload.token
        };
    }if(action.type === 'signup'){
        return {
            ...initialState,
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
