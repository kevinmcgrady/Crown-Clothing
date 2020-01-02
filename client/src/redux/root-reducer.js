import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';
import ShopReducer from './shop/shop.reducer';
import CheckoutReducer from './checkout/checkout.reducer';

import { persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer,
    checkout: CheckoutReducer
});

export default persistReducer(persistConfig, rootReducer);
