import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import CheckoutActionTypes from "../checkout/checkout.types";
import { clearCart } from '../cart/cart.actions';
import { addNotification, removeNotification } from '../UI/ui.actions';
import { push } from 'connected-react-router'
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
    
    yield put(push('/shop'));
    yield put(clearCart());
    yield put(addNotification("Payment was successful", "success"));
    yield delay(2000);
    yield put(removeNotification());

  } catch (error) {
    yield put(addNotification("Payment failed!", 'fail'));
    yield delay(2000);
    yield put(removeNotification());
  }
}

function* onPaymentStart() {
  yield takeLatest(CheckoutActionTypes.START_PAYMENT, makePayment);
}

export function* checkoutSagas() {
  yield all([call(onPaymentStart)]);
}
