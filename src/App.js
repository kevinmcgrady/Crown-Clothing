// Import react package.
import React from "react";
import "./App.css";
// impport router.
import { Switch, Route } from "react-router-dom";
// Import pages,
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import header.
import Header from "./components/header/header.component";
// Import firebase.
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // listener for the user loggin in.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if the user has logged in.
      if (userAuth) {
        // store the user in the database..
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // set the user in the state.
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
        });
      } else {
        // else, no user -- set the user to null
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
