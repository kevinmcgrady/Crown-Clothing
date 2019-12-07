import CartActionTypes from './cart.types';

// Initial state.
const INITIAL_STATE = {
    hidden: true
}

// Cart Reducer.
const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
          return {
              ...state,
              hidden: !state.hidden
          }
        default:
            return state
    }
}

export default CartReducer;