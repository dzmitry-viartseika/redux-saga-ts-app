import { spawn, call, delay, all, fork } from 'redux-saga/effects';
import axios from 'axios';

export function* loadBasicData() {
    console.log('loadBasicData');
    yield all([fork(auth), fork(loadUsers)])
}

function* loadUsers() {
    console.log('loadUsers');
    try {
        let result = null;
        yield axios.get<any>(`https://swapi.dev/api/people`)
            .then((response) => {
                console.log('response', response);
                if (response.data) {
                    result = response.data.results;
                }
            })
        console.log('result', result);
    } catch (e) {
        console.error(e);
    }
}

export function* auth() {
    console.log('auth');
    yield delay(2000);
    console.log('auth OK');
    return true;
}

export default function* rootSaga (): any {
    const sagas = [loadBasicData]
    const retrySagas = yield sagas.map((saga) => {
        return spawn(function* () {
            while(true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.error(e);
                }
            }
        })
    })
    yield all(retrySagas);
}
