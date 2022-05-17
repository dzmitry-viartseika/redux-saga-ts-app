import {
    LOAD_USER,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
} from "../../redux/reducers/peopleDetail/UserActions";

export interface IUserState {
    loading: boolean;
    error: string | null;
    data: any | null; // TODO: огромный объект потом необходимо будет типизировать :D:D:D
}

export interface LoadUserRequest {
    type: typeof LOAD_USER;
    payload?: any;
}

export interface ILoadUserSuccessPayload {
    people: any[];
}

export interface ILoadUserFailurePayload {
    error: string;
}

export type LoadUserSuccess = {
    type: typeof LOAD_USER_SUCCESS;
    payload: ILoadUserSuccessPayload;
};

export type LoadUserFailure = {
    type: typeof LOAD_USER_FAILURE;
    payload: ILoadUserFailurePayload;
};

export type UserActions =
    | LoadUserRequest
    | LoadUserSuccess
    | LoadUserFailure;
