import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "../../redux/selectors/selectors";
import ThePaginationPeople from "../Pagination/ThePaginationPeople";
import {LOAD_PEOPLE} from "../../redux/reducers/people/PeopleActions";

function TheTablePeople(): JSX.Element {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch();
    console.log('people.data.page', people.page);
    const changePage = (newPage: number) => {
        dispatch({
            type: LOAD_PEOPLE,
            payload: {
                page: newPage,
                search: people.search,
            }
        })
    }
    return (
        <>
            <table width={'100%'}>
                <thead>
                <tr>
                    <th>name</th>
                    <th>birth_year</th>
                    <th>eye_color</th>
                    <th>gender</th>
                    <th>hair_color</th>
                    <th>height</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    people.data && people.data.results.map((item: any) => {
                        return (
                            <tr key={ item.name }>
                                <td>{ item.name }</td>
                                <td>{ item.birtd_year }</td>
                                <td>{ item.eye_color }</td>
                                <td>{ item.gender }</td>
                                <td>{ item.hair_color }</td>
                                <td>{ item.height }</td>
                                <td>
                                    <button>Detail</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            {
                people.data && people.data.count ?
                    (<ThePaginationPeople
                        total={people.data.count}
                        page={people.page}
                        onChange={changePage}
                    />)
                    : null
            }
        </>
    )
}
export default TheTablePeople;
