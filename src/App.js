import React, {useState} from 'react';
import './styles/App.css'
import {PostList} from "./Components/PostList";
import {PostForm} from "./Components/PostForm";
import {Select} from "./Components/UI/select/Select";


function App() {

    const [posts, setPosts] = useState([{
        id: 1,
        title: 'JavaScript',
        body: 'Language programing'
    }, {
        id: 2,
        title: 'CSS',
        body: 'Styles for html'
    }, {
        id: 3,
        title: 'React',
        body: 'Library JS'
    },])

    const [selectedSort, setSelectedSort] = useState('')


    const addPost = (newPost) => {
        setPosts([newPost, ...posts])
    }

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (<div className='App'>
        <PostForm createPost={addPost}/>

        <hr style={{margin: '15px 0'}}/>

        <div>
            <Select value={selectedSort}
                    onChange={sortPost}
                    defaultValue={'Сортировка'}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
            />
        </div>

        {
            posts.length
                ?
                <PostList deletePost={deletePost} posts={posts} title={'Список постов'}/>
                :
                <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        }

    </div>)
}

export default App;
