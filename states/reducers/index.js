import {combineReducers} from 'redux';
import notificationReducer from './NotificationReducer';

const reducers = combineReducers({notification:notificationReducer})

export default reducers;
