import React from 'react';
import {PostItem} from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const PostList = ({posts, title, deletePost}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((el, i) => (
                    <CSSTransition
                        key={el.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem number={i + 1}
                                  post={el}
                                  deletePost={deletePost}
                        />

                    </CSSTransition>
                ))}

            </TransitionGroup>
        </div>
    )
}
