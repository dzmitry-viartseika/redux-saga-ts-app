import React from 'react'
import {Route, Routes} from 'react-router-dom';
import PeopleListPage from "./pages/PeopleListPage";
import Page404 from "./pages/Page404";
import './assets/scss/style.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "./redux/selectors/selectors";
import TheTablePeople from './components/Table/TheTablePeople';
import {LOAD_PEOPLE} from "./redux/reducers/people/PeopleActions";

function App() {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch();
    console.log('people', people);
    const search = (event: any) => {
        dispatch({
            type: LOAD_PEOPLE,
            payload: {
                page: 1,
                search: event.target.value
            }
        })
    }
    return (
        <>
            <h1>Redux Saga Star Wars People</h1>
            <Routes>
                    <Route path='/' element={<PeopleListPage />} />
                    <Route path='*' element={<Page404 />} />
            </Routes>
            <form>
                <input type="text"
                       value={people.search}
                       placeholder={'Search people'}
                       onChange={search}
                />
            </form>
            {
                people.loading ? (<div>Loading...</div>) : (
                    <TheTablePeople />
                )
            }
        </>
    );
}

export default App;
