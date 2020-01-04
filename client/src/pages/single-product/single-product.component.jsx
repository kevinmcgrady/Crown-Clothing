import React, { useEffect } from "react";
import "./single-product.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSingleProductStart } from '../../redux/shop/shop.actions';
import { withRouter } from 'react-router-dom';
import { selectSingleProduct, selectIsSingleProductFetching, selectSingleProductError } from '../../redux/shop/shop.selectors';
import Spinner from '../../components/spinner/spinner.component';
import ErrorPage from '../../pages/404/404.component';
import SingleProductOverview from '../../components/single-product-overview/single-product-overview.component';

export const SingleProductPage = ({ match, fetchSingleProduct, isLoading, error, singleProduct }) => {

  useEffect(() => {
    fetchSingleProduct(match.params);
  }, [fetchSingleProduct,match])

  if(error) {
    return <ErrorPage />
  }

  if(isLoading) {
    return <Spinner />
  } else {
    return <SingleProductOverview product={singleProduct} />
  }
}


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsSingleProductFetching,
  error: selectSingleProductError,
  singleProduct: selectSingleProduct
})

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: (parms) => dispatch(fetchSingleProductStart(parms))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleProductPage));
