// Initial State.
const INITIAL_STATE = {
    currentUser: null
}

// User Reducer.
const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default UserReducer;