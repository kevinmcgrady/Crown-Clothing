import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity * cartItem.price, 0)
)

export const selectDisplayNotification = createSelector(
    [selectCart],
    (cart) => cart.displayNotification
)

export const selectNotificationMessage = createSelector(
    [selectCart],
    (cart) => cart.notificationMessage
)

export const selectNotificationType = createSelector(
    [selectCart],
    (cart) => cart.notificationType
)

