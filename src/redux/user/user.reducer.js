import UserActionTypes from './user.types';

// Initial State.
const INITIAL_STATE = {
    currentUser: null,
    error: null
}

// User Reducer.
const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payoad
            }
        default:
            return state
    }
}

export default UserReducer;