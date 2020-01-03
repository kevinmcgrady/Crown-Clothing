import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from './root-saga';
import { routerMiddleware } from 'connected-react-router';
import { history } from '../redux/root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
