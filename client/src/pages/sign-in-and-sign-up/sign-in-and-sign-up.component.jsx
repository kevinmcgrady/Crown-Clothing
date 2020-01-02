import React from "react";
import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserErrorMessage } from "../../redux/user/user.selector";

const SignInAndSignUpPage = ({ errorMessage }) => {
  return (
    <div>
      <p className="errorMessage">{errorMessage}</p>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  errorMessage: selectUserErrorMessage
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
