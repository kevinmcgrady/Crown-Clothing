import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchSingleProductStart = (urlParams) => ({
  type: ShopActionTypes.FETCH_SINGLE_PRODUCT_START,
  payload: urlParams
})

export const fetchSingleProductSuccess = (product) => ({
  type: ShopActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
  payload: product
})

export const fetchSingleProductError = (error) => ({
  type: ShopActionTypes.FETCH_SINGLE_PRODUCT_FAILURE,
  payload: error
})
