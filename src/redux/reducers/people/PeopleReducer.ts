import { LOAD_PEOPLE, LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS } from './PeopleActions';
const initialState = {
    page: 1,
    search: '',
    loading: false,
    error: null,
    data: null,
};

export default function peopleReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_PEOPLE: {
            // const { page, search } = payload;
            return {
                ...state,
                loading: true,
                // page,
                // search,
            }
        }

        case LOAD_PEOPLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: payload,
            }
        }

        case LOAD_PEOPLE_FAILURE: {
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
