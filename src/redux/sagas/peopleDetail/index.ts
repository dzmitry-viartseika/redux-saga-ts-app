import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_USER, LOAD_USER_SUCCESS } from '../../reducers/peopleDetail/UserActions';

export function* loadDetailUser({payload}: any): any {
    console.log('loadDetailUser');
    const { id } = payload;
    try {
        const response = yield call(axios.get, `https://swapi.dev/api/people/${id}/`);
        yield put({
            type: 'LOAD_USER_SUCCESS',
            payload: response.data
        }
        );
    } catch (e) {
        console.log(e)
    }
}

export default function* userSaga() {
    yield takeEvery('LOAD_USER', loadDetailUser);
}
