import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';

// Root Reducer.
export default combineReducers({
    user: UserReducer
});
