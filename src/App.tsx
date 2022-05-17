import React from 'react'
import {Route, Routes} from 'react-router-dom';
import PeopleListPage from "./pages/PeopleListPage";
import Page404 from "./pages/Page404";
import './assets/scss/style.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "./redux/selectors/selectors";
import TheTablePeople from './components/Table/TheTablePeople';
import {LOAD_PEOPLE} from "./redux/reducers/people/PeopleActions";
import SinglePeoplePage from "./pages/SinglePeoplePage";

function App() {

    return (
        <>
            <h1>Redux Saga Star Wars People</h1>
            <Routes>
                    <Route index element={<PeopleListPage />} />
                    <Route path='/people/:id' element={<SinglePeoplePage />} />
                    <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    );
}

export default App;
