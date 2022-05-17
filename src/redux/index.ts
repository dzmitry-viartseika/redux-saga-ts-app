import  { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducers/";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;
