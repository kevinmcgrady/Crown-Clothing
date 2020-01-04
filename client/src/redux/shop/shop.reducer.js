import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: null,
    singleProduct: {},
    isFetchingSingleProduct: false,
    singleProductError: undefined
}

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
                isFetchingSingleProduct: false
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isFetchingSingleProduct: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                isFetchingSingleProduct: false,
                errorMessage: action.payload
            }
        case ShopActionTypes.FETCH_SINGLE_PRODUCT_START:
            return {
                ...state,
                isFetchingSingleProduct: true
            }
        case ShopActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetchingSingleProduct: false,
                singleProduct: action.payload
            }
        case ShopActionTypes.FETCH_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                isFetchingSingleProduct: false,
                singleProductError: action.payload
            }
        default: 
            return state;
    }
}

export default ShopReducer;