import { UserActionTypes } from './user.types';

// Initial State.
const INITIAL_STATE = {
    currentUser: null
}

// User Reducer.
const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default UserReducer;