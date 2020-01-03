import { all, call, takeLatest, put, delay } from 'redux-saga/effects';
import CartActionTypes from '../cart/cart.types';
import { addNotification, removeNotification } from './ui.actions';

export function* toggleDisplayNotification() {
    yield put(addNotification('Item Added', 'success'));
    yield delay(2000);
    yield put(removeNotification());
}

export function* onToggleDisplayNotification() {
    yield takeLatest(CartActionTypes.ADD_ITEM, toggleDisplayNotification)
}

export function* UISagas() {
    yield all([call(onToggleDisplayNotification)]);
  }