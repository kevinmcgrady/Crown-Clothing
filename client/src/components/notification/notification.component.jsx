import React from "react";
import "./notification.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplayNotification } from '../../redux/cart/cart.selectors';

const Notification = ({ displayNotification }) => {
  return (
    <div className={displayNotification ? `notification animate` : `notification`}>
      <p>Item Added</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    displayNotification: selectDisplayNotification
})

export default connect(mapStateToProps)(Notification);
