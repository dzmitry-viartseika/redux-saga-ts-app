import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {LOAD_USER} from "../redux/reducers/peopleDetail/UserActions";
import {useDispatch} from "react-redux";

function SinglePeoplePage(): JSX.Element {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_USER,
            payload: {
                id,
            }
        });
    }, [])
    return (
        <div>
            Detail Page
        </div>
    )
}

export default SinglePeoplePage;
