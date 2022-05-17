import {
    LOAD_PEOPLE,
    LOAD_PEOPLE_SUCCESS,
    LOAD_PEOPLE_FAILURE,
} from "../../redux/reducers/people/PeopleActions";

export interface IPeopleState {
    page: number;
    search: string;
    loading: boolean;
    error: string | null;
    data: any | null; // TODO: огромный объект потом необходимо будет типизировать :D:D:D
}

export interface LoadPeopleRequest {
    type: typeof LOAD_PEOPLE;
    payload?: any;
}

export interface ILoadPeopleSuccessPayload {
    people: any[];
}

export interface ILoadPeopleFailurePayload {
    error: string;
}

export type LoadPeopleSuccess = {
    type: typeof LOAD_PEOPLE_SUCCESS;
    payload: ILoadPeopleSuccessPayload;
};

export type LoadPeopleFailure = {
    type: typeof LOAD_PEOPLE_FAILURE;
    payload: ILoadPeopleFailurePayload;
};

export type PeopleActions =
    | LoadPeopleRequest
    | LoadPeopleSuccess
    | LoadPeopleFailure;
