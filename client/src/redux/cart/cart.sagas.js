import { all, call, takeLatest, put, delay } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import CartActionTypes from '../cart/cart.types';

import { clearCart, toggleNotification } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* toggleDisplayNotification() {
    yield put(toggleNotification('Item Added'));
    yield delay(2000);
    yield put(toggleNotification(null));
}

export function* onToggleDisplayNotification() {
    yield takeLatest(CartActionTypes.ADD_ITEM, toggleDisplayNotification)
}

// Root cart sagas.
export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onToggleDisplayNotification)
    ]);
}