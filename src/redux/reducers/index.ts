import { combineReducers } from 'redux';
import PeopleReducer from './people/PeopleReducer';
import UserReducer from './peopleDetail/UserReducer';

const initialState = {};

export function appReducer(state = initialState, action: any) {
    return state;
}

export const rootReducer = combineReducers({
    app: appReducer,
    people: PeopleReducer,
    userDetail: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>
