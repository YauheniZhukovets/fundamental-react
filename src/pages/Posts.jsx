import React, {useEffect, useState} from 'react';
import {PostList} from "../Components/PostList";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import {getPageCount} from "../utils/pages";
import {Button} from "../Components/UI/button/Button";
import {Modal} from "../Components/UI/modal/Modal";
import {PostForm} from "../Components/PostForm";
import {PostFilter} from "../Components/PostFilter";
import {Pagination} from "../Components/UI/pagination/Pagination";
import {Loader} from "../Components/UI/loder/Loader";


export const Posts = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, seLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPost, isPostLoading, errorFetchPost] = useFetching(async () => {
        const res = await PostService.getAll(limit, page)
        setPosts(res.data)

        const totalCount = res.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPost()
    }, [page])


    const changePage = (page) => {
        setPage(page)
    }

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

            <Pagination currentPage={page}
                        totalPage={totalPage}
                        onClickCallback={changePage}
            />

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

            <Pagination currentPage={page}
                        totalPage={totalPage}
                        onClickCallback={changePage}
            />

        </div>)
}
