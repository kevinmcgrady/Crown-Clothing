import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => {
  return createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );
};

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

export const selectSingleProduct = createSelector(
  [selectShop],
  shop => shop.singleProduct
)

export const selectIsSingleProductFetching = createSelector(
  [selectShop],
  shop => shop.isFetchingSingleProduct
)

export const selectSingleProductError = createSelector(
  [selectShop],
  shop => shop.singleProductError
)

export const selectIsSingleProductLoaded = createSelector(
  [selectShop],
  shop => !!shop.singleProduct
)

export const selectRelatedProducts = collectionId => {
  return createSelector(
    [selectShopCollections], 
    collections => collections ? Object.keys(collections)
    .map((collection) => collections[collection])
    .filter((collection) => collection.id === collectionId) : null
  );
};
