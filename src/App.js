import React, {useState} from 'react';
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
    const [description, setDescription] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {id: 5, title: name, body: description}])
        setName('')
        setDescription('')
    }

    return (
        <div className='App'>

            <form>
                <Input value={name}
                       type="text"
                       placeholder={'Название поста'}
                       onChange={(e) => setName(e.currentTarget.value)}
                />
                <Input value={description}
                       type="text"
                       placeholder={"Описание поста"}
                       onChange={(e) => setDescription(e.currentTarget.value)}
                />
                <Button onClick={addNewPost}>Создать пост</Button>
            </form>

            <PostList posts={posts} title={'Список постов'}/>

        </div>
    )
}

export default App;
