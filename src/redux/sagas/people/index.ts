import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'

export function* loadPeopleList() {}

export function* loadPeopleDetails({payload}: any) {
    const { page, search } = payload;
    try {
        const { data } = yield call(axios.get, `https://swapi.dev/api/people?page=${page}&search=${search}`)
        yield put({ type: 'RECEIVE_API_DATA', payload: { users: data } })
    } catch (e) {
        console.log(e)
    }
}

export function* peopleSaga() {
    takeEvery('', loadPeopleList);
}
