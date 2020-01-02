import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import CheckoutActionTypes from "../checkout/checkout.types";
import { toggleNotification, clearCart } from '../cart/cart.actions';
import { redirectTo } from './checkout.actions';

import axios from 'axios';

function* makePayment({ payload: { token, priceForStripe } }) {
  try {
    yield axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    });
    
    yield put(toggleNotification("Payment was successful", "success"));
    yield delay(2000);
    yield put(toggleNotification(null, null));
    yield put(redirectTo('/shop'));
    yield put(redirectTo(null));
    yield put(clearCart());

  } catch (error) {
    yield put(toggleNotification("Payment failed!", 'fail'));
    yield delay(2000);
    yield put(toggleNotification(null, null));
  }
}

function* onPaymentStart() {
  yield takeLatest(CheckoutActionTypes.START_PAYMENT, makePayment);
}

export function* checkoutSagas() {
  yield all([call(onPaymentStart)]);
}
