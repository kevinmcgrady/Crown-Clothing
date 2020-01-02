// Import react package.
import React, { useEffect, lazy, Suspense } from "react";
import { GlobalStyle } from "./global.styles";
// import router.
import { Switch, Route, Redirect } from "react-router-dom";

// import header.
import Header from "./components/header/header.component";
import Spinner from './components/spinner/spinner.component';

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

// Lazy loaded pages.
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state)
  };
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
