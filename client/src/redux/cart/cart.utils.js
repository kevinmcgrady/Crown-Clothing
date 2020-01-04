// Method to add an item.
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Find existing cart item.
  const existingCartItem = cartItems.find(
     cartItem => cartItem.id === cartItemToAdd.id && cartItem.option === cartItemToAdd.option
  );
  
  // If there is an cart item.
  if (existingCartItem) {
    // loop through the  items
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id && cartItem.option === cartItemToAdd.option
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

// Method to remove an item.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id && cartItem.option === cartItemToRemove.option);
  
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => (cartItem.id !== cartItemToRemove.id) || (cartItem.option !== cartItemToRemove.option));
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id && cartItem.option === cartItemToRemove.option 
    ? { ...cartItem, quantity: cartItem.quantity - 1 } 
    : cartItem)
}
