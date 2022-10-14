import {About} from "../pages/About";
import {Posts} from "../pages/Posts";
import {PostPage} from "../pages/PostPage";
import React from "react";
import {Login} from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/post/:id', element: <PostPage/>},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
]
