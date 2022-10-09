import React from 'react';
import {PostItem} from "./PostItem";

export const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>

            {posts.map((el) => (
                <PostItem key={el.id}
                          post={el}
                />
            ))}

        </div>
    )
}
