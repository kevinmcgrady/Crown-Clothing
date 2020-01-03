import React from "react";
import "./notification.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDisplayNotification,
  selectNotificationMessage,
  selectNotificationType
} from "../../redux/UI/ui.selectors";

const Notification = ({ displayNotification, notificationMessage, notificationType }) => {
  return (
    <div
      className={displayNotification ? `notification animate ${notificationType}` : `notification`}
    >
      <p>{notificationMessage}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  displayNotification: selectDisplayNotification,
  notificationMessage: selectNotificationMessage,
  notificationType: selectNotificationType
});

export default connect(mapStateToProps)(Notification);
