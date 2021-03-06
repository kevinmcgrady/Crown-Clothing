import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/user-sagas';
import { cartSagas } from './cart/cart.sagas';
import { checkoutSagas } from './checkout/checkout.sagas';
import { UISagas } from './UI/ui.sagas';

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas),
        call(checkoutSagas),
        call(UISagas)
    ]);
}