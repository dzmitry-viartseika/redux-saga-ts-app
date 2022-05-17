import React from 'react'
import {Route, Routes} from 'react-router-dom';
import PeopleListPage from "./pages/PeopleListPage";
import Page404 from "./pages/Page404";
import './assets/scss/style.scss'
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
