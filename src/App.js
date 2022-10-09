import React, {useRef, useState} from 'react';
import './styles/App.css'
import {PostList} from "./Components/PostList";
import {Button} from "./Components/UI/button/Button";
import {Input} from "./Components/UI/input/Input";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Language programing'},
        {id: 2, title: 'CSS', body: 'Styles for html'},
        {id: 3, title: 'React', body: 'Library JS'},
        {id: 4, title: 'TypeScript', body: 'Extends for JS'},
    ])

    const [name, setName] = useState('')
    const bodyInputRef = useRef('')


    const addNewPost = (e) => {
        e.preventDefault()

        const body = bodyInputRef.current.value

        setPosts([...posts, {id: 5, title: name, body}])

        setName('')
        bodyInputRef.current['value'] = ''
    }

    return (
        <div className='App'>

            <form>

                {/*Управляемый input*/}
                <Input value={name}
                       type="text"
                       placeholder={'Название поста'}
                       onChange={(e) => setName(e.currentTarget.value)}
                />

                {/*Неуправляемый input*/}
                <Input
                    ref={bodyInputRef}
                    type="text"
                    placeholder={"Описание поста"}
                />
                <Button onClick={addNewPost}>Создать пост</Button>
            </form>

            <PostList posts={posts} title={'Список постов'}/>

        </div>
    )
}

export default App;
