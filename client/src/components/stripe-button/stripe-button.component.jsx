import React, { useEffect } from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { startPayment } from "../../redux/checkout/checkout.actions";
import { createStructuredSelector } from "reselect";
import { selectRedirectURL } from "../../redux/checkout/checkout.selectors";
import { withRouter } from "react-router-dom";

const StripeCheckoutButton = ({
  price,
  startPayment,
  redirectURL,
  history
}) => {
  const priceForStripe = price * 100;
  const publishKey = "pk_test_KqA2Urc50O9BngLuqYyUOjpO";

  const onToken = token => {
    startPayment({ token, priceForStripe });
  };

  useEffect(() => {
    if (redirectURL) {
      history.push(redirectURL);
    }
  }, [redirectURL, history]);

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  startPayment: paymentDetails => dispatch(startPayment(paymentDetails))
});

const mapStateToProps = createStructuredSelector({
  redirectURL: selectRedirectURL
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton)
);
