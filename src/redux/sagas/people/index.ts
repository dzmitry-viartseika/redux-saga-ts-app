import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_PEOPLE, LOAD_PEOPLE_SUCCESS } from '../../reducers/people/PeopleActions';

interface IPayloadProp {
    page: number;
    search: string;
}

export function* loadPeopleList({payload}: any): any {
    const { page = 1, search = '' }: IPayloadProp = payload;
    try {
        const response = yield call(axios.get, `https://swapi.dev/api/people?page=${page}&search=${search}`)
        yield put({
            type: LOAD_PEOPLE_SUCCESS,
            payload: response.data
            }
        );
    } catch (e) {
        console.log(e);
        yield put({
            type: LOAD_PEOPLE_SUCCESS,
            payload: 'Что-то пошло не так'
        });
    }
}

export default function* peopleSaga() {
    yield takeEvery('LOAD_PEOPLE', loadPeopleList);
}
