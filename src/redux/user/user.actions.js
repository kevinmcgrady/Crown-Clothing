import { UserActionTypes } from './user.types';

// Set current user action.
export const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}