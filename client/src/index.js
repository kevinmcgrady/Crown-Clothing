import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import { history } from './redux/root-reducer';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
