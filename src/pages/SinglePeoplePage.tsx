import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {LOAD_USER} from "../redux/reducers/peopleDetail/UserActions";
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {selectUserDetail} from "../redux/selectors/selectors";

function SinglePeoplePage(): JSX.Element {
    const { id } = useParams<string>();
    const dispatch = useDispatch();
    const userDetail = useSelector(selectUserDetail);

    useEffect(() => {
        dispatch({
            type: LOAD_USER,
            payload: {
                id,
            }
        });
    }, [id]);

    return (
        <div>
            <Link to={'/'}>
                Back to Home page
            </Link>
            <hr/>
            Detail Page
            {userDetail.data && userDetail.data.name ?  <div>{ userDetail.data.name }</div> : null}
            {userDetail.data && userDetail.data.birth_year ?  <div>{ userDetail.data.birth_year }</div> : null}
            {userDetail.data && userDetail.data.skin_color ?  <div>{ userDetail.data.skin_color }</div> : null}
            <hr/>
        </div>
    )
}

export default SinglePeoplePage;
