import CheckoutActionTypes from './checkout.types';

export const startPayment = (paymentDetails) => {
    return {
        type: CheckoutActionTypes.START_PAYMENT,
        payload: paymentDetails
    }
}

export const redirectTo = (location) => {
    return {
        type: CheckoutActionTypes.REDIRECT_TO,
        payload: location
    }
}