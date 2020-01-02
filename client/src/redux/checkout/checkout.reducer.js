import CheckoutActionTypes from './checkout.types';

const INITIAL_STATE = {
    isFetching: false,
    error: null,
    success: null,
    redirectURL: null
}

const CheckoutReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CheckoutActionTypes.START_PAYMENT:
            return {
                ...state,
                isFetching: true,
                error: null,
                success: null,
            }
        case CheckoutActionTypes.REDIRECT_TO:
            return {
                ...state,
                isFetching: false,
                error: null,
                success: null,
                redirectURL: action.payload
            }
        default:
            return state;
    }
}

export default CheckoutReducer;