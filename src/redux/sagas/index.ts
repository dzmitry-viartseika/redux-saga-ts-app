import { spawn, call, delay, all, fork } from 'redux-saga/effects';
import peopleSaga from "./people";
import userSaga from "./peopleDetail";

export default function* rootSaga (): any {
    const sagas = [peopleSaga, userSaga];

    yield all(sagas.map(saga => spawn(saga)));
}
