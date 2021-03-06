import React, { useEffect, lazy, Suspense } from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

// Lazy loaded routes for the pages.
const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../../pages/collection/collection.container")
);

const SingleProductPage = lazy(() =>
  import("../../pages/single-product/single-product.component")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
      fetchCollectionsStart();
    }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          <Route
              path={`${match.path}/:collectionId/:productId`}
              component={SingleProductPage}
            />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
