import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { LOAD_PEOPLE } from '../redux/reducers/people/PeopleActions';

function PeopleListPage(): JSX.Element {
    const [vehiclesList, setVehiclesList] = useState<any[]>([]);
    const store = useSelector((store) => store);
    console.log('store', store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_PEOPLE
        });
    }, [])
    return (
        <div>
            <h1>BlogPage Page</h1>
        </div>
    )
}
export default PeopleListPage;
