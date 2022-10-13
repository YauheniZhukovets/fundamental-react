import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import {Loader} from "../Components/UI/loder/Loader";

export const PostPage = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const {id} = useParams()
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const res = await PostService.getPost(id)
        setPost(res.data)
    })

    const [fetchComment, isLoadingComment, errorComment] = useFetching(async () => {
        const res = await PostService.getCommentsByPost(id)
        setComments(res.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchComment()
    }, [id])

    return (
        <div>
            {
                isLoading
                    ? <Loader/>
                    : <div>
                        <h3>{post.id}:{post.title}</h3>
                        <span>Описание: {post.body}</span>
                    </div>
            }
            {
                isLoadingComment
                    ? <Loader/>
                    : <div>
                        <h1>Комментарии:</h1>
                        <div>
                            {comments.map((comm) => (
                                <div key={comm.id} style={{marginTop: 10}}>
                                    <h3>{comm.name}</h3>
                                    <h4>{comm.email}</h4>
                                    <span>{comm.body}</span>
                                </div>
                            ))}
                        </div>
                    </div>
            }
        </div>
    )
}