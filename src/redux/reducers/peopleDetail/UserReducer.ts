import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from './UserActions';
import {IUserState, UserActions} from '../../../model/user-details/types';

const initialState: IUserState = {
    data: null,
    error: null,
    loading: false
};

export default function userDetailsReducer(state = initialState, action: UserActions) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER: {
            return {
                ...state,
                loading: true,
            }
        }

        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                data: payload,
            }
        }

        case LOAD_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload,
            }
        }

        default:
            return state;
    }
}
