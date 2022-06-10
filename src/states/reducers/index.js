import {combineReducers} from 'redux';
import notificationReducer from './NotificationReducer';
import AuthReducer from './AuthenticationReduces';

const reducers = combineReducers({notification:notificationReducer, authData:AuthReducer})

export default reducers;
