import CartActionTypes from './cart.types';

// Action to toggle the cart in view.
export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

// Action to add an item.
export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const clearCart = () => {
    return {
        type: CartActionTypes.CLEAR_CART
    }
}

export const toggleNotification = (message, type) => {
    return {
        type: CartActionTypes.TOGGLE_NOTIFICATION,
        payload: { message, type }
    }
}