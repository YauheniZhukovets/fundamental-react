import React from 'react';
import {Button} from "./UI/button/Button";

export const PostItem = ({post, number, deletePost}) => {

    const removePost = () => {
        deletePost(post.id)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
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