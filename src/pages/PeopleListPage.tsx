import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { LOAD_PEOPLE } from '../redux/reducers/people/PeopleActions';
import TheTablePeople from "../components/Table/TheTablePeople";
import {selectPeople} from "../redux/selectors/selectors";

function PeopleListPage(): JSX.Element {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch();
    const search = (event: any) => {
        dispatch({
            type: LOAD_PEOPLE,
            payload: {
                page: 1,
                search: event.target.value
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
    }, [])
    return (
        <div>
            <h1>PEOPLELIST Page</h1>
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
