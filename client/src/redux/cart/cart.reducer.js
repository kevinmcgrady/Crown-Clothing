import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

// Initial state.
const INITIAL_STATE = {
  hidden: true,
  displayNotification: false,
  cartItems: [],
  notificationMessage: null,
  notificationType: "success"
};

// Cart Reducer.
const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => (item.id !== action.payload.id) || (item.option !== action.payload.option))
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default CartReducer;
