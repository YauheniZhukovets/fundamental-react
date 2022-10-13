import React from 'react';
import {Button} from "./UI/button/Button";
import {NavLink} from "react-router-dom";

export const PostItem = ({post, deletePost}) => {


    const removePost = () => {
        deletePost(post.id)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>

            <div className="post__btns">
                <NavLink to={`/post/${post.id}`}><Button>Открыть</Button></NavLink>
                <Button onClick={removePost}>Удалить</Button>
            </div>
        </div>
    )
}