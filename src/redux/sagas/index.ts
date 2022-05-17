import { spawn, all } from 'redux-saga/effects';
import peopleSaga from "./people";
import userSaga from "./peopleDetail";

export default function* rootSaga (): Generator {
    const sagas = [peopleSaga, userSaga];

    yield all(sagas.map(saga => spawn(saga)));
}
