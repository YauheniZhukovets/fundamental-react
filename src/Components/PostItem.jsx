import React from 'react';
import {Button} from "./UI/button/Button";

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
                <Button onClick={removePost}>Удалить</Button>
            </div>
        </div>
    )
}