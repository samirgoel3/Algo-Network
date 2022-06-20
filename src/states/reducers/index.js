import {combineReducers} from 'redux';
import notificationReducer from './NotificationReducer';
import AuthReducer from './AuthenticationReduces';
import ErrorDialogReducer from './ErrorDialogReducer';

const reducers = combineReducers({notification:notificationReducer, authData:AuthReducer, errorDialogData:ErrorDialogReducer})

export default reducers;
