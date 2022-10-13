import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../router/router";

export const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map((route) =>
                    <Route path={route.path} element={route.component}/>)
            }
        </Routes>
    )
}