import { createSelector } from 'reselect';

const selectCheckout = (state) => state.checkout;

export const selectRedirectURL = createSelector(
    [selectCheckout],
    (checkout) => checkout.redirectURL
)