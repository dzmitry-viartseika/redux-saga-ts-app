import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_PEOPLE, LOAD_PEOPLE_SUCCESS } from '../../reducers/people/PeopleActions';

export function* loadPeopleList({payload}: any): any {
    console.log('payload', payload);
    const { page = 1, search = '' } = payload;
    try {
        const response = yield call(axios.get, `https://swapi.dev/api/people?page=${page}&search=${search}`)
        console.log('response', response);
        yield put({
            type: 'LOAD_PEOPLE_SUCCESS',
            payload: response.data
        }
        );
    } catch (e) {
        console.log(e)
    }
}

export function* loadPeopleDetails() {
}

export default function* peopleSaga() {
    yield takeEvery('LOAD_PEOPLE', loadPeopleList);
}
