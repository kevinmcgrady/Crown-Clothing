// Import react package.
import React from "react";
import "./App.css";
// impport router.
import { Switch, Route, Redirect } from "react-router-dom";
// Import pages,
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './pages/checkout/checkout.component';

// import header.
import Header from "./components/header/header.component";
// Import firebase.
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    
    // listener for the user loggin in.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if the user has logged in.
      if (userAuth) {
        // store the user in the database..
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // set the user in the state.
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
          });
        });
      } else {
        // else, no user -- set the user to null
        setCurrentUser( userAuth );
      }
    });
  }

  componentWillUnmount() {
    // unsub from the subscription.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
