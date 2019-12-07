import CartActionTypes from './cart.types';

// Action to toggle the cart in view.
export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}