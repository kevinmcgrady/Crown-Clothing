import React from "react";
import "./notification.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplayNotification, selectNotificationMessage } from '../../redux/cart/cart.selectors';

const Notification = ({ displayNotification, notificationMessage }) => {
  return (
    <div className={displayNotification ? `notification animate` : `notification`}>
      <p>{notificationMessage}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    displayNotification: selectDisplayNotification,
    notificationMessage: selectNotificationMessage
})

export default connect(mapStateToProps)(Notification);
