import UIActionTypes from './ui.types';

export const redirectTo = (location) => {
    return {
        type: UIActionTypes.REDIRECT_TO,
        payload: location
    }
}

export const addNotification = (message, type) => {
    return {
        type: UIActionTypes.ADD_NOTIFICAION,
        payload: { message, type }
    }
}

export const removeNotification = () => {
    return {
        type: UIActionTypes.REMOVE_NOTIFICATION
    }
}