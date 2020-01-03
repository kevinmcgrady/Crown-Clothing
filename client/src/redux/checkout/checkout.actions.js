import CheckoutActionTypes from './checkout.types';

export const startPayment = (paymentDetails) => {
    return {
        type: CheckoutActionTypes.START_PAYMENT,
        payload: paymentDetails
    }
}