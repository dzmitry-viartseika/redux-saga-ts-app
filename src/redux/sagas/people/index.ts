import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_PEOPLE, LOAD_PEOPLE_SUCCESS } from '../../reducers/people/PeopleActions';
import {Generator} from "../../../model/model";
import { AxiosResponse } from 'axios';

interface IPayloadProp {
    page: number;
    search: string;
    type: string;
    payload?: any;
}

export function* loadPeopleList({payload}: IPayloadProp) {
    const { page = 1, search = '' }: IPayloadProp = payload;
    try {
        const response: AxiosResponse<any[]> = yield call(axios.get, `https://swapi.dev/api/people?page=${page}&search=${search}`);
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

export default function* peopleSaga(): Generator {
    yield takeEvery('LOAD_PEOPLE', loadPeopleList);
}
