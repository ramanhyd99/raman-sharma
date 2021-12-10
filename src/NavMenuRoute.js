import React from "react";
import { Routes, Route } from 'react-router-dom';
import Weather from './Weather';
import Info from './Info'

const NavMenuRoute = () => {


    return (
        <Routes>
            <Route exact path='/weather' element={<Weather />}></Route>
            <Route exact path='/' element={<Info />}></Route>
        </Routes>
    )
}

export default NavMenuRoute;