import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {PostList} from "./Components/PostList";
import {PostForm} from "./Components/PostForm";
import {PostFilter} from "./Components/PostFilter";
import {Modal} from "./Components/UI/modal/Modal";
import {Button} from "./Components/UI/button/Button";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/postService";
import {Loader} from "./Components/UI/loder/Loader";
import {useFetching} from "./hooks/useFetching";


function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPost, isPostLoading, errorFetchPost] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    useEffect(() => {
        fetchPost()
    }, [])


    const addPost = (newPost) => {
        setPosts([newPost, ...posts])
        setModal(false)
    }

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    return (
        <div className='App'>

            <Button style={{marginTop: 20}}
                    onClick={() => setModal(true)}
            >
                Создать пост
            </Button>

            <Modal visible={modal} setVisible={setModal}>
                <PostForm createPost={addPost}/>
            </Modal>

            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter}
                        setFilter={setFilter}
            />

            {
                errorFetchPost &&
                <h1>Произошла ошибка: {errorFetchPost}</h1>
            }

            {
                isPostLoading
                    ? <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Loader/>
                    </div>
                    : <PostList deletePost={deletePost}
                                posts={sortedAndSearchedPosts}
                                title={'Список постов'}
                    />
            }

        </div>)
}

export default App;
