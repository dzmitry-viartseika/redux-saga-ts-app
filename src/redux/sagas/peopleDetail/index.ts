import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from '../../reducers/peopleDetail/UserActions';
import { AxiosResponse } from 'axios';

export function* loadDetailUser({payload}: any): any {
    const { id } = payload;
    try {
        const response: AxiosResponse<any[]> = yield call(axios.get, `https://swapi.dev/api/people/${id}/`);
        yield put({
            type: LOAD_USER_SUCCESS,
            payload: response.data
            }
        );
    } catch (e) {
        console.log(e)
        yield put({
            type: LOAD_USER_FAILURE,
            payload: 'Что-то пошло не так'
        });
    }
}

export default function* userSaga() {
    yield takeEvery('LOAD_USER', loadDetailUser);
}
