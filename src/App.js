import React, {useState} from 'react';
import './styles/App.css'
import {PostList} from "./Components/PostList";
import {PostForm} from "./Components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Language programing'},
        {id: 2, title: 'CSS', body: 'Styles for html'},
        {id: 3, title: 'React', body: 'Library JS'},
        {id: 4, title: 'TypeScript', body: 'Extends for JS'},
    ])

    const addPost = (newPost) => {
        setPosts([newPost, ...posts])
    }

    return (
        <div className='App'>
            <PostForm createPost={addPost}/>
            <PostList posts={posts} title={'Список постов'}/>
        </div>
    )
}

export default App;
