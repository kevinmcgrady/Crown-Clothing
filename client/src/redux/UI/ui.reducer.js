import UIActionTypes from "./ui.types";

const INITIAL_STATE = {
  redirectURL: null,
  displayNotification: false,
  notificationMessage: null,
  notificationType: null
};

const UIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UIActionTypes.REDIRECT_TO:
      return {
        ...state,
        isFetching: false,
        error: null,
        success: null,
        redirectURL: action.payload
      };
    case UIActionTypes.ADD_NOTIFICAION:
      return {
        ...state,
        displayNotification: true,
        notificationMessage: action.payload.message,
        notificationType: action.payload.type
      };
    case UIActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        displayNotification: false,
        notificationMessage: null,
        notificationType: null
      };
    default:
      return state;
  }
};

export default UIReducer;
