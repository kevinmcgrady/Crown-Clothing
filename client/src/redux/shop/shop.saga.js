import {
  takeLatest,
  call,
  put,
  all
} from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchSingleProductError,
  fetchSingleProductSuccess
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* fetchSingleProductAsync({ payload }) {
  try {
    const { collectionId, productId } = payload;
    try {
      const collectionRef = yield firestore
        .collection("collections")
        .doc(collectionId);
      const snapShot = yield collectionRef.get();
      if (snapShot.exists) {
        const singleProductItems = yield snapShot.data().items;
        const singleProduct = yield singleProductItems.find(
          item => item.id === parseInt(productId)
        );
        if (!singleProduct || singleProduct === "undefined") {
          yield put(fetchSingleProductError("Product was not found!"));
        } else {
          yield put(fetchSingleProductSuccess(singleProduct));
        }
      } else {
        yield put(fetchSingleProductError("Product was not found!"));
      }
    } catch (error) {
      yield put(
        fetchSingleProductError("There was a problem fetching this product!")
      );
    }
  } catch (error) {
    yield put(fetchSingleProductError("There was a problem!"));
  }
}

export function* fetchSingleProductStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_SINGLE_PRODUCT_START,
    fetchSingleProductAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart), call(fetchSingleProductStart)]);
}
