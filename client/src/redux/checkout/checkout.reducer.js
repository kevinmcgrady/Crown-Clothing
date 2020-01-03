import CheckoutActionTypes from './checkout.types';

const INITIAL_STATE = {
    isFetching: false,
    error: null,
    success: null
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
        default:
            return state;
    }
}

export default CheckoutReducer;