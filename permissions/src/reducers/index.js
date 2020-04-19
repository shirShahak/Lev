import {combineReducers} from 'redux';
import {permissionsReducer} from './permissionsReducer';

export default combineReducers({
    permissions : permissionsReducer
});