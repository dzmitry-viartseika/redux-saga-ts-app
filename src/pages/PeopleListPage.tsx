import React, {useEffect, ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import { LOAD_PEOPLE } from '../redux/reducers/people/PeopleActions';
import TheTablePeople from "../components/Table/TheTablePeople";
import {selectPeople} from "../redux/selectors/selectors";

function PeopleListPage(): JSX.Element {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch();
    const search = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event;
        dispatch({
            type: LOAD_PEOPLE,
            payload: {
                page: 1,
                search: value
            }
        })
    }

    useEffect(() => {
        dispatch({
            type: LOAD_PEOPLE,
            payload: {
                page: 1,
            }
        });
    }, []);
    return (
        <div>
            <h1>PEOPLE LIST Page</h1>
            <form>
                <input type="text"
                       value={people.search ?? ''}
                       placeholder={'Search people'}
                       onChange={search}
                />
            </form>
            {
                people.loading ? (<div>Loading...</div>) : (
                    <TheTablePeople />
                )
            }
        </div>
    )
}
export default PeopleListPage;
