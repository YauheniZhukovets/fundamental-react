import {About} from "../pages/About";
import {Posts} from "../pages/Posts";
import {PostPage} from "../pages/PostPage";
import React from "react";
import {Navigate} from "react-router-dom";

export const routes = [
    {path: '/', component: <Navigate to="/posts" replace/>},
    {path: 'about', component: <About/>},
    {path: 'posts', component: <Posts/>},
    {path: 'post/:id', component: <PostPage/>},
    {path: '404', component: <h1>404: PAGE NOT FOUND</h1>},
    {path: '*', component: <Navigate to={'/404'}/>},
]