import React, {useState} from 'react';
import {Input} from "./UI/input/Input";
import {Button} from "./UI/button/Button";
import {generateKey} from "../utils/generateKey";


export const PostForm = ({createPost}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {id: generateKey('post'), ...post}

        createPost(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый input*/}
            <Input value={post.title}
                   type="text"
                   placeholder={'Название поста'}
                   onChange={(e) => setPost({...post, title: e.target.value})}
            />

            {/*Неуправляемый input*/}
            <Input value={post.body}
                   type="text"
                   placeholder={"Описание поста"}
                   onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <Button onClick={addNewPost}>Создать пост</Button>
        </form>
    )
}