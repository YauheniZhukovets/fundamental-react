import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";
import {Loader} from "./UI/loder/Loader";

export const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
                <Route path="*" element={<Navigate to="/posts" replace/>}/>
                {privateRoutes.map((route, i) =>
                    <Route key={i} path={route.path} element={route.element}/>
                )}
            </Routes>

            : <Routes>
                <Route path="*" element={<Navigate to="/login" replace/>}/>
                {publicRoutes.map((route, i) =>
                    <Route key={i} path={route.path} element={route.element}/>
                )}
            </Routes>

    )
}