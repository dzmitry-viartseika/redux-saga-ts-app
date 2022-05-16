import { combineReducers } from 'redux';
import PeopleReducer from './people/PeopleReducer';

const initialState = {};

export function appReducer(state = initialState, action: any) {
    return state;
}

export const rootReducer = combineReducers({
    app: appReducer,
    people: PeopleReducer,
});

export type RootState = ReturnType<typeof rootReducer>
