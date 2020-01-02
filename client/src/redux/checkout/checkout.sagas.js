import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import CheckoutActionTypes from "../checkout/checkout.types";
import { toggleNotification, clearCart } from '../cart/cart.actions';

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
    yield put(toggleNotification("Payment was successful"));
    yield delay(2000);
    yield put(toggleNotification(null));
    yield put(clearCart());

  } catch (error) {
    yield put(toggleNotification("Payment failed!"));
    yield delay(2000);
    yield put(toggleNotification(null));
  }
}

function* onPaymentStart() {
  yield takeLatest(CheckoutActionTypes.START_PAYMENT, makePayment);
}

export function* checkoutSagas() {
  yield all([call(onPaymentStart)]);
}
