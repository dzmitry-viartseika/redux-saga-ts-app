import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { LOAD_PEOPLE } from '../redux/reducers/people/PeopleActions';

function PeopleListPage(): JSX.Element {
    const dispatch = useDispatch();

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
            <h1>BlogPage Page</h1>
        </div>
    )
}
export default PeopleListPage;
