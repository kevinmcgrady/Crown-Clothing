import { createSelector } from 'reselect';

const selectUI = (state) => state.ui;

export const selectRedirectURL = createSelector(
    [selectUI],
    (ui) => ui.redirectURL
)

export const selectDisplayNotification = createSelector(
    [selectUI],
    (ui) => ui.displayNotification
)

export const selectNotificationMessage = createSelector(
    [selectUI],
    (ui) => ui.notificationMessage
)

export const selectNotificationType = createSelector(
    [selectUI],
    (ui) => ui.notificationType
)