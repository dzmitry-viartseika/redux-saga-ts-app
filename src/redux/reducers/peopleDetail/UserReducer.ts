import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from './UserActions';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function userDetailsReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER: {
            console.log('LOAD_USER')
            return {
                ...state,
                loading: true,
            }
        }

        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
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
