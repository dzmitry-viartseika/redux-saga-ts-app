import { spawn, call, delay, all, fork } from 'redux-saga/effects';
import peopleSaga from "./people";

export default function* rootSaga (): any {
    const sagas = [peopleSaga];

    yield all(sagas.map(saga => spawn(saga)));
}
